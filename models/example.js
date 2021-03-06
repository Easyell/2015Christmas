// Generated by CoffeeScript 1.8.0
(function() {
  var allStars, allStarsJson, collectionName, db, defaultDirection, filePath, findAllCache, findAllFilter, isUpdate, model, path, readFS, sliceStars;

  path = require('path');

  readFS = require('../services/readFS');

  model = require('./model');

  allStarsJson = '../data/allUcBaikeStars.json';

  filePath = path.resolve(__dirname, allStarsJson);

  allStars = readFS.readAllStarJson(filePath);

  collectionName = 'allstars';

  isUpdate = false;

  findAllCache = null;

  defaultDirection = 1;

  db = function(cb) {
    return model.db(function(db) {
      return cb(db.collection(collectionName));
    });
  };

  findAllFilter = function(arr, direction, limit) {
    var d1, d2, len;
    if (limit < 0) {
      limit = arr.length;
    }
    len = Math.min(arr.length, limit);
    d1 = direction;
    d2 = d1 === 1 ? -1 : 1;
    return arr.sort(function(current, next) {
      if (current.score > next.score) {
        return d1;
      } else {
        return d2;
      }
    }).slice(0, len);
  };

  sliceStars = function(arr, direction, limit, startIndex) {
    var end, resultArr, start;
    start = end = 0;
    if (direction === defaultDirection) {
      start = startIndex;
    } else {
      start = arr.length - limit - startIndex;
    }
    end = start + limit;
    return resultArr = arr.slice(start, end);
  };

  module.exports = {
    insertAll: function() {
      return new Promise(function(resolve) {
        var insertArr;
        insertArr = allStars.map(function(obj) {
          return {
            name: obj.name,
            portrait: obj.ucPic,
            score: 0
          };
        });
        return db(function(collection) {
          return collection.insertMany(insertArr, function(err, result) {
            if (err) {
              throw err;
            }
            return resolve(result);
          });
        });
      });
    },
    resetAllScore: function() {
      return new Promise(function(resolve) {
        return db(function(collection) {
          return collection.updateMany({}, {
            $set: {
              score: 0
            }
          }, function(err, result) {
            if (err) {
              throw err;
            }
            isUpdate = true;
            return resolve(result);
          });
        });
      });
    },
    updateSomeStars: function(updateArr) {
      return new Promise(function(resolve) {
        return db(function(collection) {
          return Promise.all(updateArr.map(function(updateObj, i) {
            return new Promise(function(resolve) {
              return collection.updateOne({
                name: updateObj.name
              }, {
                $set: {
                  score: updateObj.score
                }
              }, function(err, result) {
                if (err) {
                  throw {
                    err: err,
                    index: i
                  };
                }
                return resolve(result);
              });
            });
          })).then(function(updatedArr) {
            isUpdate = true;
            return resolve(updatedArr);
          });
        });
      });
    },
    findAllStars: function(start, direction, limit) {
      if (start == null) {
        start = 0;
      }
      if (direction == null) {
        direction = 1;
      }
      if (limit == null) {
        limit = 10;
      }
      start = parseInt(start);
      direction = parseInt(direction);
      limit = parseInt(limit);
      return new Promise(function(resolve) {
        if (isUpdate || !findAllCache) {
          return db(function(collection) {
            return collection.find({}).toArray(function(err, docs) {
              isUpdate = false;
              findAllCache = findAllFilter(docs, defaultDirection, -1.);
              return resolve(sliceStars(findAllCache, direction, limit, start));
            });
          });
        } else {
          return resolve(sliceStars(findAllCache, direction, limit, start));
        }
      });
    }
  };

}).call(this);

//# sourceMappingURL=allStarsModel.js.map

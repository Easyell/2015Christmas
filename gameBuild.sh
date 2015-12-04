#!/bin/sh

dir="views"

gameName=$1

touch $dir/$gameName.ejs

cat $dir/indexTemplate.ejs > $dir/$gameName.ejs

cat ".bowerrc" |while read b
do
 echo $b
done
#!/bin/sh

routeDir="routes"
dir="views"
jsDir="public/js"

gameName=$1
#gameName="|xxxxx|"

if [ $gameName ]
then
  echo $gameName
else
  echo "no argument"
  exit 0
fi

targetEjs="$dir/$gameName.ejs"
targetRoute="$routeDir/controller/$gameName.js"


#复制模板并生成文件
cat $dir/indexTemplate.ejs > $targetEjs
cat $routeDir/viewRouteTemplate.js > $targetRoute
mkdir $jsDir/$gameName
mkdir $jsDir/$gameName/sprites
touch $jsDir/$gameName/main.js

echo "拷贝模板_done"

#替换ejs中的js和标题

indexOf(){
 text=$1
 target=$2

 targetLen=${#target}

 textLen=`seq 0 ${#text}`
   for i in $textLen
 do
  partial=${text:i:targetLen};

  if [[ $partial == $target ]]
  then
   return $i
   break
  fi
 done

 return 0
}


all=""

targetVar="{{GameName}}"
targetVarLen=${#targetVar}

while read line
do
 #findI=`indexOf $line $targetVar`
 indexOf "${line}" $targetVar
 findI=$?

 if [ $findI == 0 ]
 then
  line="${line}\n"
 else

  lineLen=${#line}

  nextStart=$findI+$targetVarLen

  pre=${line:0:$findI}
  next=${line:nextStart:lineLen}

  line="${pre}${gameName}${next}\n"

 fi

 all="${all}${line}"

done < $targetEjs

echo $all > $targetEjs
echo "替换ejs_done"

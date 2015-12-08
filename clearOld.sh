#!/bin/sh

routeDir="routes"
dir="views"
jsDir="public/js"

oldName=$1

if [ $oldName ]
then
    echo $oldName
else
    echo "no argument"
    exit 0
fi

targetEjs="$dir/$oldName.ejs"
targetRoute="$routeDir/controller/$oldName.js"

rm $targetEjs
rm $targetRoute
rm $jsDir/$oldName/main.js
rm -r $jsDir/$oldName/sprites
rm -r $jsDir/$oldName

echo "done"
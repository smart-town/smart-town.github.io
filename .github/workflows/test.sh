message=$1
buildFlag=":rocket:"
if [[ $2 != "" ]]
then
    buildFlag=$2
fi

if [[ $message =~ $buildFlag ]]
then
    echo "Prepare build... ( •̀ ω •́ )✧"
else
    echo "not need"
fi

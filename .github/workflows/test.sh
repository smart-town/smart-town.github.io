message=$1
buildFlag=":rocket:"
if [[ $message =~ $buildFlag ]]
then
    echo "Prepare build... ( •̀ ω •́ )✧"
else
    echo "Do not need to build, exit!"
    exit 1
fi

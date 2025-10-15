#!/bin/bash
set -e
set +x

SECRET_FOLDER=~/Spool/secret

echo ''
echo '--------------------------------------------------------------------------------'
echo "Lint"
echo '--------------------------------------------------------------------------------'

npm run lint


echo ''
echo '--------------------------------------------------------------------------------'
echo "Test Typescript"
echo '--------------------------------------------------------------------------------'

npx tsc --noEmit


echo ''
echo '--------------------------------------------------------------------------------'
echo "Install and version"
echo '--------------------------------------------------------------------------------'

npm install
rm -rf ./deploy
rm -rf ./dist


echo ''
echo '--------------------------------------------------------------------------------'
echo "Version $VERSION"
echo '--------------------------------------------------------------------------------'

npm version patch
VERSION=$(grep '"version"' package.json | awk -F'"' '{print $4}')
git push


echo ''
echo '--------------------------------------------------------------------------------'
echo "Build"
echo '--------------------------------------------------------------------------------'

npm run build
REMOTE_PATH=/home/www/resume.blag.us
mkdir deploy
ARCHIVE="dist-$VERSION.zip"
zip -r ./deploy/$ARCHIVE ./dist
rm -rf ./dist


if [ ! -f $SECRET_FOLDER/port ] || [ ! -f $SECRET_FOLDER/host ] || [ ! -f $SECRET_FOLDER/user ] || [ ! -f $SECRET_FOLDER/pass ]; then
  echo ''
  echo '--------------------------------------------------------------------------------'
  echo 'Missing files in "secret": host (with user), pass and port'
  echo '--------------------------------------------------------------------------------'
  exit 1


else
  echo ''
  echo '--------------------------------------------------------------------------------'
  echo "Upload & publish to $(cat $SECRET_FOLDER/host)"
  echo '--------------------------------------------------------------------------------'

  sshpass -f $SECRET_FOLDER/pass scp -P $(cat $SECRET_FOLDER/port) ./deploy/$ARCHIVE $(cat $SECRET_FOLDER/user)@$(cat $SECRET_FOLDER/host):$REMOTE_PATH
  rm -rf ./deploy
  sshpass -f $SECRET_FOLDER/pass ssh $(cat $SECRET_FOLDER/user)@$(cat $SECRET_FOLDER/host) -p $(cat $SECRET_FOLDER/port) "cd $REMOTE_PATH && rm -rf ./dist && unzip ./$ARCHIVE && rm ./$ARCHIVE"


  echo ''
  echo '--------------------------------------------------------------------------------'
  echo 'Done'
  echo '--------------------------------------------------------------------------------'
fi



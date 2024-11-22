#!/bin/bash
set -e
set +x


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


if [ ! -f secret/port ] || [ ! -f secret/host ] || [ ! -f secret/user ] || [ ! -f secret/pass ]; then
  echo ''
  echo '--------------------------------------------------------------------------------'
  echo 'Missing files in "secret": host (with user), pass and port'
  echo '--------------------------------------------------------------------------------'
  exit 1


else
  echo ''
  echo '--------------------------------------------------------------------------------'
  echo "Upload & publish to $(cat secret/host)"
  echo '--------------------------------------------------------------------------------'

  sshpass -f secret/pass scp -P $(cat secret/port) ./deploy/$ARCHIVE $(cat secret/user)@$(cat secret/host):$REMOTE_PATH
  rm -rf ./deploy
  sshpass -f secret/pass ssh $(cat secret/user)@$(cat secret/host) -p $(cat secret/port) "cd $REMOTE_PATH && rm -rf ./dist && unzip ./$ARCHIVE && rm ./$ARCHIVE"


  echo ''
  echo '--------------------------------------------------------------------------------'
  echo 'Done'
  echo '--------------------------------------------------------------------------------'
fi



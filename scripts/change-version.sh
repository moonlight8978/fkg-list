for directory in . ./packages/fkg-list-crawler ./packages/fkg-list-shared ./packages/fkg-list-types ./packages/fkg-list-webapp; do
  yarn json --in-place -f "${directory}/package.json" -e "this.version = '$1'"
done

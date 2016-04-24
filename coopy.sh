#!/bin/sh

for f in $(ls $1/source/_posts/*.markdown)
do
  name=$(basename $f)
  y=$(echo $name | cut -d"-" -f 1)
  m=$(echo $name | cut -d"-" -f 2)
  d=$(echo $name | cut -d"-" -f 3)
  t=$(echo $name | cut -d"-" -f 4- | sed s/\.markdown$/\.md/)
  dest=content/post/$y/$m/$d
  echo copy $f to $dest/$t...
  mkdir -p $dest && cp $f $dest/$t
done

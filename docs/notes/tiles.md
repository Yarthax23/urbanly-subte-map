How do I use https://tile.openstreetmap.org/{z}/{x}/{y}.png ? I tried z=10, x= -58.3816, y=-34.6037 but `You requested an invalid tile.`
* MapLibre converts whole numbers automatically
* Tile numbers are given by zoom level: 
    * z=x=y=0 is the whole map
    * z=1 x=0/1, y=0/1 gives 4 quadrants, x/y > 1 won't work
    * Given z, x/y are in [0, 2^z - 1]
    * Given x/y, if zooming in: x\*2/y\*2 times Z (zooming out reverses this)

e.g. https://tile.openstreetmap.org/13/2766/4935.png

Made a zooming gif from 0 to 13 into Palermo town with 
```
convert   *.png   -delay 60   -morph 3   -morph 3   13.png 13.png 13.png   -resize 512x512   -layers Optimize   -loop 0   osm_palermo.gif
```

![Zooming into Palermo](../images/osm_palermo.gif)
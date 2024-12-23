# openlayers
## openlayers对象结构
![openlayers对象结构](./openlayersClass.png)

## 创建一个地图
```js
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([108, 34]),
    zoom: 5
  })
});
```

## Layer对象的子类

### 1.瓦片图层（Tile Layers）
> 瓦片图层其原理是将整个地图区域划分为多个小的瓦片，根据地图的缩放级别和当前视图范围，只加载用户能看到的瓦片，从而提高地图的加载速度和性能。

**使用示例**
```js
  let newLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: '.../{z}/{x}/{y}'
    })
  })
```

## 2.矢量图层（Vector Layers）
> 用于显示矢量数据，如点、线、面等地理要素。
> 
> 可以对矢量图层中的要素进行样式设置，如颜色、大小、线的宽度、填充色等。

**使用示例**
```js
  let newLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: []
    })
  })
```

## 3.影像图层（Image Layers）
> 用于显示单张的地图影响，通常是从一个服务或者本地文件获取的完整地图影像。与瓦片图层不同的是影像图层不是由多个小瓦片组成，而是一个整体图像。
> 
> 这种图层适用于展示高分辨率的遥感影像、航空照片等，不过他可能在处理大数据量的影像时性能不如瓦片图层，因为整个影像需要一次性加载。

**使用示例**
```js
  let newLayer = new ol.layer.Image({
    source: new ol.source.ImageWMS({
      url: '...',
      params: {
        'FORMAT': 'image/png',
        'VERSION': '1.1.0'
      }
    })
  })
```

> 😛待编写...
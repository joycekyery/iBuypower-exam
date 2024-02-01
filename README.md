## Demo
查看實際展示:[Demo](https://i-buypower-exam-gat4d12mv-yungchingl-unimelbedu.vercel.app/)

### 如何運行
本專案使用yarn管理和下載
```
yarn install
yarn dev
```


使用[Swiper](https://swiperjs.com/)實現Slider功能，支援觸控左右滑動。我個人傾向於使用元件庫以提高開發速度，但同時保持靈活性，如果找不到合適的替代元件，可以手動撰寫，或與設計團隊溝通變更設計。

### Reusable components
Card和Slider元件設計成可重用，通過傳遞 props 進行自定義，實現模組化和高效的開發過程。

Card元件保留排版設計，props定義該元件顯示的字元內容。Slider元件定義了Slider的運作模式，包含按鈕及顯示邏輯如:一次最多顯示4筆，當超過4筆只顯示4筆。

如日後需要調整排版或個別調整排版，也可以再多增加props提高靈活度。

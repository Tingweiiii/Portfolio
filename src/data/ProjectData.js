import netflix from "../assets/image/image1.png"
import todolist from "../assets/image/image2.png"

const ProjectData = [
    {
        id: 1,        
        title: "Netflix",
        subTitle: "React | Styled-Components | Axios",
        desc: "以 Netflix 為模板，使用 React 特性先將部分區塊切割成 component ，並結合 Axios 來取得資料。另外，可以透過搜尋功能，尋找心儀的電影。",
        img: netflix,
        bgc: "#7A3938"
    },
    {
        id: 2,        
        title: "Todo List",
        subTitle: "React | Sacc",
        desc: "將輸入的資料透過字串的形式儲存至 localStorage 中。除了可以對已建立的清單項目進行修改以及刪除，也有完成按鈕可以提醒項目完成與否。",
        img: todolist,
        bgc: "#FFC043"
    }
]

export default ProjectData
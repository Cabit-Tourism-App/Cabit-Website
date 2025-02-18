import "./ImageBox.css"
export default function ShadowImageBox({ source = "/images/download.jpeg", height = "90vh", width = "90vh" }) {
    return (
        <div className="ImageBox" style={{ height: height, width: width ,backgroundImage:`url(${source})`}}>

            <div className = "InnerShadow ">

            </div>

        </div>
    );
}

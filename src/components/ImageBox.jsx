export default function ImageBox({ source = "images/download.jpeg", height = "70vh", width = "100%" }) {
    return (
        <div className="ImageBox-Container" style={{ height: height, width: width }}>
            <img src={source} alt="Image" height="100%" width="100%" />
            
            {/* Fixed closing div tag */}
            <div className="ImageBox-Container-Shadow" style={{ height: height, width: width }}>
            </div> 
        </div>
    );
}

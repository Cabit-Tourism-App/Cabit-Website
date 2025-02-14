
export default function AboutCard(props) {
    return (
        <div className="bg-white bg-opacity-50 border border-gray-100 container col-xxl-8 px-4 py-5 mb-4 container_border_radius">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-lg-6">
                    <h1 className="text-4xl display-5 fw-bold text-body-emphasis lh-1 mb-3 text-start">
                        {props.heading}</h1>
                    <p className=" text-start">{props.para}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 ">Primary</button>

                    </div></div>
                <div className="col-10 col-sm-8 col-lg-6">
                    <img className="d-block mx-lg-auto img-fluid border border-gray-1000 container_border_radius" alt="Bootstrap Themes" width="700" height="500" loading="lazy" src={props.imgsrc} />
                </div>
            </div>
        </div>
    );
}
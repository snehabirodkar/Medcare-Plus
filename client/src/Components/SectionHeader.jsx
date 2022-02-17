import react from "react";

const SectionHeader = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-12 text-center section-header">
                    <h1 className="py-4" style={{fontWeight: "bold", color: "#2184BB"}}>{props.title}</h1>
                </div>
            </div>
        </>
    )
}

export default SectionHeader;
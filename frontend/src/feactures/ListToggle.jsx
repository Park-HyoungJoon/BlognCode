const ListToggle = () => {
    const [toggled,setToggled] = useState(false);
    const handleCheck = () => {
        setToggled(!toggled);
    };

    return(
        <div onClick={handleCheck} data-toggled={toggled} className="ListToggle">
            <div>
                <i className="fa fa-fw fa-plus"></i>
                <i className="fa fa-fw fa-check"></i>
            </div>
        </div>
    )
}

export default ListToggle;
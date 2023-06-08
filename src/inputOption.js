import './inputOption.css'

const InputOption = ({Icon, color, title}) => {

    return (
        <div className='inputOptions'>
            <Icon style={{color:color}} />
            <h4>{title} </h4>
        </div>
    );
}

export default InputOption;

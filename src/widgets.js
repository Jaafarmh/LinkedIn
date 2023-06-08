import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './widgets.css';

const Widgets = () => {
    const newArticle = (heading, subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle} </p>
            </div>
        </div>
    )

    return (
    
    <div className='widgets__section'>
        
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newArticle("LinkedIn News Europe", 'Skills-First: Reimagining the Labor Market and Breaking Down Barriers')}

            {newArticle("LinkedIn News Europe", 'ChatGPT might replace your doctor — and it will actually do a better job of caring for you')}
            {newArticle("Nedap Security Management", 'SicherheitsExpo 2023 - Unser Herz schlägt für Ihre Sicherheit!')}
            {newArticle("LinkedIn News", 'Why EVs may not save the planet')}
        </div>
   
    </div>
             
    
    );
}

export default Widgets;

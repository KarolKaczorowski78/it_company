import React, { useEffect, useState } from 'react';
import IntroSection from '../components/universal/introSection/introSection';
import InnerNav from '../components/universal/innerNav/innerNav';
import H1 from '../components/universal/h1/h1';
import P from '../components/universal/p/p';
import ServicesMainImg from '../img/servicesMain.jpg';
import { Services as servicesNames } from '../universal/constants/sectionNames';
import ServiceSection from '../components/services/serviceSection/serviceSection';
import servicesData from '../textContent/services';
import { useHistory } from 'react-router-dom';

const Services = () => {
    const history = useHistory();
    const [hashState, setHashState] = useState<string>('');

    const renderSections = () => servicesData.map(({ title, content, img }, i) => 
        <ServiceSection serviceName={ title } content={ content } imgUrl={ img }
                         key={ i } index={ i } updateHistory={ setHashState } />)

    useEffect(() => { history.replace(`#${hashState}`) }, [hashState]);

    return (
        <div style={{ background: '#262d2e' }}>
            <IntroSection imgUrl={ ServicesMainImg } setPageHash={ setHashState }>
                <H1><span>Newest technologies and skilled developers </span>
                    <span>for Your business success.</span></H1>
                <P>On this page You can view our services and match them to Your needs!</P>
            </IntroSection>
            <InnerNav sectionNames={ Object.values(servicesNames) } />
            { renderSections() }
        </div>
    )
}

export default Services;
import { getName } from '../../../utils/cookie/cookie';
import * as M from './style';

function MyInfo(){
    return (
        <M.InfoBox>
            <M.NameBox>안녕하세요. {getName('token')} 님!</M.NameBox>
            
        </M.InfoBox>
    )
}

export default MyInfo;

import Data from '../../components/DataJson/Data'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Details = (props) => {
    console.log(props,'propssss')
    const router = useRouter();
    console.log(router,'router');
    return (
        <div>
        
        <div style={{ width: '100%'}}>
            <h1>صفحه جزییات</h1>
            <span>{router.query.id}</span>
            
        </div>
        <Link href='/'> 
            خانه
        </Link>
        </div>

    );
}

export default Details;


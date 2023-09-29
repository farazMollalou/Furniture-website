import { Hourglass } from 'react-loader-spinner'
import './PreLoader.css'

function PreLoader() {
    return (
        <div className="LoaderWrapper">
            <Hourglass
                visible={true}
                height="200"
                width="200"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#6499E9', '#2E4374']}
            />
            <h3 className='loader-title'>Please wait ...</h3>
        </div>
    )
}

export default PreLoader
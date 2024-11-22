

import Description from './description';
import Information from './information';
import ServiceLogin from '@/app/common/sign/service-login';

export default function SignInPage() {
    return (
        <div
            className="items-center justify-center w-screen h-screen
                 bg-white bg-blend-overlay"
        >
            <div
                className="min-h-screen flex items-center justify-center gap-28 w-full mx-auto pb-[50px]
                bg-cover bg-center"
            >
                <Description />
                <Information />
            </div>
        </div>
    );
}

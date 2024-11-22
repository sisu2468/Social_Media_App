import Link from "next/link";
type NohaveSignupProps = {
    type: boolean;
}
export default function NohaveSignup ({type}: NohaveSignupProps) {
    return (
        <div className="flex justify-center gap-1 mt-5 text-white items-center">
            <span className="text-xs capitalize font-normal">{!type ? 'already have an account?' : "Don't Have An Account?"}</span>
            <Link href={`${!type ? '/auth/signin' : '/auth/signup'}`}>
                <span className="text-xs capitalize font-normal cursor-pointer hover:underline">{!type ? 'Sign In' : 'Sign Up'}</span>
            </Link>
        </div>
    )
}
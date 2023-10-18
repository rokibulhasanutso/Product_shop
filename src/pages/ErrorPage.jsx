import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    console.error(error);

    return (
        <div className="w-screen h-screen grid place-content-center">
            <div className="text-slate-500 flex flex-col items-center gap-10">
                <p className="text-7xl font-semibold">{error.status || null}</p>
                <p className="text-4xl font-semibold">Opps!</p>
                <p className="text-xl font-semibold tracking-widest">
                    This page is {error.statusText || error.massage || "Not Found"}.
                </p>
                <button
                    className="border px-4 py-1.5 rounded-md bg-slate-50 hover:bg-slate-200"
                    type="button"
                    onClick={() => navigate('/')}
                >
                    Go to Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;

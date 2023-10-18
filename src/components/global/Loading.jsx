

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-96">
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce-custom"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce-custom"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce-custom"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce-custom"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-custom"></div>
                <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce-custom"></div>
                <div className="w-4 h-4 bg-violet-500 rounded-full animate-bounce-custom"></div>
            </div>
        </div>
    );
};

export default Loading;
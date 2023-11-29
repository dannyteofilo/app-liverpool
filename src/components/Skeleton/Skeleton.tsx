export const Skeleton = () => {
    return (
        <div className="flex flex-col gap-4 w-1/3">
            <div className="skeleton bg-accent h-32 w-full"></div>
            <div className="skeleton bg-accent h-4 w-28"></div>
            <div className="skeleton bg-accent h-4 w-full"></div>
            <div className="skeleton bg-accent h-4 w-full"></div>
        </div>
    );
};

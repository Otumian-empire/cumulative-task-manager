export function Alert(props: { hasError: boolean; message: string }) {
    return (
        <>
            {props.hasError && (
                <div className={`alert ${props.hasError ? "error" : "info"}`}>
                    <span>{props.message}</span>
                </div>
            )}
        </>
    );
}

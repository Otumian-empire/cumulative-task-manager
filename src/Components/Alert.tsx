export function Alert(props: { message: string }) {
    return (
        <div className="alert">
            <span>{props.message}</span>
        </div>
    );
}

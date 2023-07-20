export default function Square({ value, onSquareClick }) {

    return (
        <>
            <button
                onClick={onSquareClick}
                style={{
                    background: 'none',
                    textAlign: 'center',
                }}
            >
                {value}
            </button>
        </>
    )
} 
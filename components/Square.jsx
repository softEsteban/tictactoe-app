export default function Square({ value, onSquareClick }) {

    return (
        <>
            <button
                onClick={onSquareClick}
                className="w-16 h-16 border border-gray-500 flex items-center justify-center text-2xl"
            >
                {value}
            </button>
        </>
    )
} 
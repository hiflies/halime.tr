import {useEffect, useState} from "react";

type TypewriterTextProps = {
    texts: string[],
};

export default function TypewriterText({texts}: TypewriterTextProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [isBlink, setIsBlink] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    const currentText = texts[currentTextIndex];

    useEffect(() => {
        if (isBlinking) {
            const interval = setInterval(() => setIsBlink(blink => !blink), 500);

            return () => clearInterval(interval);
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsBlink(false);
        }
    }, [isBlinking]);

    useEffect(() => {
        setTimeout(() => {
            const isLastLetter = currentLetterIndex === currentText.length;
            const isFirstLetter = currentLetterIndex === 0;

            if (isTyping && !isLastLetter) {
                setCurrentLetterIndex(currentLetterIndex + 1);
            } else if (!isTyping && !isFirstLetter) {
                setCurrentLetterIndex(currentLetterIndex - 1);
            } else {
                setIsBlinking(true);
                setTimeout(() => {
                    setIsBlinking(false);
                    setIsTyping(typing => {
                        if (!typing) {
                            setCurrentTextIndex(currentTextIndex => (currentTextIndex + 1) % texts.length);
                        }
                        return !typing;
                    });
                }, 2500);
            }
        }, 100);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentLetterIndex, isTyping]);

    return (
        <>
            {currentText.substring(0, currentLetterIndex)}
            <span className={isBlink ? 'hidden' : ''}>|</span>
        </>
    );
}
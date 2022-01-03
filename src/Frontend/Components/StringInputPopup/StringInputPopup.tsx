import {connect} from "react-redux";
import styles from "./StringInputPopup.module.css";
import React, {useState} from "react";

export type StringInputPopupTexts = {
    title: string,
    inputPlaceholder: string,
    submitBtnText: string
}

type StringInputPopupProps = {
    texts: StringInputPopupTexts,
    onSubmit: (inputValue: string) => void,
    setDisplayStringInputPopup: React.Dispatch<boolean>
}

function StringInputPopup({
    texts,
    onSubmit,
    setDisplayStringInputPopup
}: StringInputPopupProps): JSX.Element {
    const [inputValue, setInputValue] = useState("");

    function updateInputValue(e: any) {
        setInputValue(e.target.value);
    }

    return (
        <div className={styles.popup}>
            <div className={styles.exit} onClick={() => setDisplayStringInputPopup(false)}/>
            <div>{texts.title}</div>
            <input
                type={"text"}
                className={styles.input}
                placeholder={texts.inputPlaceholder}
                value={inputValue}
                onChange={updateInputValue}
            />
            <div className={styles.submit} onClick={() => {
                onSubmit(inputValue);
                setDisplayStringInputPopup(false);
            }}>{texts.submitBtnText}</div>
        </div>
    )
}

export default connect()(StringInputPopup)

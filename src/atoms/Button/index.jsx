// styles
import "./styles.scss";
import { useLocale } from "../../contexts/LocaleContext";

const Button = () => {
    const { localeDataSource } = useLocale();

    return (
        <button type="button" className="button-wrapper">
            <div>
                <span>{localeDataSource?.schedule_your_consultation}</span>
            </div>
        </button>
    )
}

export default Button;

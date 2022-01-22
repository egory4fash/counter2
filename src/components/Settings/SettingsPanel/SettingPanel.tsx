import s from './SettingaPanel.module.css'


export const SettingPanel = () => {
    return (
        <div className = {s.main}>

            <button className = {`${s.panel} ${s.button} ${s.left}`}>
                -
            </button>
            <div className = {s.panel}>max</div>
            <button className = {`${s.panel} ${s.right} ${s.button}`}>
                +
            </button>

        </div>
    )
}
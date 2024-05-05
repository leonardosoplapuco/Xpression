import './LayerBlur.css';

function LayerBlur() {
    return(
        <div className="LayerBlur"></div>
    );
}

export function ActiveLayerBlur(){
    const LayerBlur = document.querySelector('.LayerBlur');
    LayerBlur.classList.add('active');
}

export function DesactiveLayerBlur(){
    const LayerBlur = document.querySelector('.LayerBlur');
    LayerBlur.classList.remove('active');
}

export default LayerBlur;
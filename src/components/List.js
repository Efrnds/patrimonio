import Item from './Item';
function List() {
    return (
        <>
            <ul>
                <Item marca="renault" ano_lancamento={1999} />
                <Item />
            </ul>
        </>
    );
}

export default List;
import React from 'react';

type LocalStorageType = {
    value:number
}


export const LocalStorage = (props:LocalStorageType) => {
    return (
        <div>
            <h3>
                {props.value}
            </h3>
        </div>

    );
};


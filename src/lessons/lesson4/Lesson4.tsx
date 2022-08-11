import React from 'react'
import './lesson_4';

const Lesson4 = () => {

    const handlePromise = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: (paramName: string) => {
            return console.log(`Promise is resolved with data: ${paramName}`)
        },
        onError: (paramName: string) => {
            return console.log(`Promise is rejected with error: ${paramName}`)
        }
    }


    const onCreatePromiseClick = () => {
        //@ts-ignore
        return handlePromise.promise = new Promise((res, rej) => {
            //@ts-ignore
             handlePromise.resolve = res
            //@ts-ignore
             handlePromise.reject = rej
        })
            .then(res => {
                //@ts-ignore
                return handlePromise.onSuccess('Data')
            })
            .catch(rej => {
                return handlePromise.onError('Error')
            })
    }
    const onResolvePromiseClick = () => {
        //@ts-ignore
        handlePromise.resolve()
    }
    const onRejectPromiseClick = () => {
        //@ts-ignore
        handlePromise.reject()
    }


    return (
        <div>
            <button id='btn-create-promise' onClick={onCreatePromiseClick}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={onResolvePromiseClick}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={onRejectPromiseClick}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;
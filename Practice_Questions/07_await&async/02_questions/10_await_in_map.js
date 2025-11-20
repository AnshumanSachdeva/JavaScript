
    // try {
    //     const urls = [
    //         'https://jsonplaceholder.typicode.com/posts/1',
    //         'https://jsonplaceholder.typicode.com/posts/2',
    //         'https://jsonplaceholder.typicode.com/posts/3'
    //     ];
    //     urls.map(async (url)=>{
    //             const res = await fetch(url);
    //             const data = await res.json();
    //             console.log(data);
            
    //     })
    // } catch (error) {
    //     console.log(error);
        
    // }

    // yeh code bilkul sahi hai bs ismein urls.map(async...) => yeh sirf ek array of promises bana raha hai, but tu un promises ka wait nhi kar raha.

// So agar kisi fetch() mein error aata hai, toh uska catch bahar wale try-catch mein nahi aayega.

// Koi error ho bhi jaye, tu notice bhi nahi karega unless tu har promise ke andar try-catch lagaye.

// Code ka flow continue ho jaata hai bina unke complete hone ka wait kiye. so promise.all k andr ar pura code wrap krna pdega


    try {
        const urls = [
            'https://jsonplaceholder.typicode.com/posts/1',
            'https://jsonplaceholder.typicode.com/posts/2',
            'https://jsonplaceholder.typicode.com/posts/3'
        ];

        await Promise.all(
                urls.map(async (url)=>{
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
            })
        )
    } catch (error) {
        console.log(error);
        
    }

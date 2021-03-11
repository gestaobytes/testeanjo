// export default function ({ $axios, store, redirect }) {

//     $axios.onError(error => {
//         if (error.response.status === 422) {
//             store.dispatch("validation/setErrors", error.response.data.errors);
//         }
//         return Promise.reject(error);
//     });

//     $axios.onRequest(() => {
//         store.dispatch("validation/clearErrors");
//     });



//     /*
//     $axios.onRequest(config => {
//         console.log('Making request to ' + config.url)
//     })

//     $axios.onError(error => {
//         const code = parseInt(error.response && error.response.status)
//         if (code === 400) {
//             redirect('/400')
//         }
//     })
//     */
// }
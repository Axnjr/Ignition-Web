export default function Compnies() {
    return (
        <div className="text-center w-full relative overflow-hidden">
            <div className="w-[95%] m-auto h-[2px] bg-gradient-to-r from-[#070713] from-15% via-mybg to-85% to-[#070713] mb-20"></div>
            <div className="conic_line z-10 -top-1 left-1/2 h-[500px] w-full user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
            <h1 className="text-xl sm:text-2xl mt-32 mb-16  text-gray-50 font-normal px-8">
                Companies of all sizes need Real time somewhere.&nbsp;
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-b from-[#c7d2fe] to-mybg bg-clip-text text-xl text-transparent tracking-wide">
                    From next-gen startups to established enterprises.
                </span>
            </h1>
            <div className="mx-auto grid w-full max-w-7xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-items-center gap-6 p-6 sm:p-8 lg:grid-cols-6">
                <svg className="col-sapn-1 w-20" viewBox="0 0 42 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.25789 10.8678C3.43012 11.338 3.66856 11.7401 3.97327 12.0739C4.27798 12.4079 4.63897 12.6634 5.05624 12.8406C5.47355 13.0178 5.92727 13.1063 6.41744 13.1063C6.89438 13.1063 7.34146 13.0143 7.75877 12.8303C8.17609 12.6463 8.54038 12.3874 8.85168 12.0535C9.16298 11.7196 9.40477 11.321 9.577 10.8576C9.74923 10.3942 9.83532 9.87633 9.83532 9.30389V0.472412H11.9218V14.7826H9.85519V13.4538C9.39154 13.9581 8.84504 14.3465 8.21579 14.6191C7.5865 14.8917 6.90761 15.028 6.179 15.028C5.4371 15.028 4.74493 14.8951 4.10241 14.6293C3.45993 14.3635 2.90349 13.9854 2.43324 13.4947C1.96299 13.0041 1.59202 12.4147 1.32046 11.7264C1.04886 11.0381 0.913086 10.2716 0.913086 9.42652V0.472412H2.99957V9.30389C2.99957 9.87633 3.08566 10.3976 3.25789 10.8678Z" /><path d="M15.5187 0.472412V5.68541C15.9824 5.20841 16.5189 4.83025 17.1283 4.55083C17.7377 4.27142 18.4001 4.13173 19.1154 4.13173C19.8573 4.13173 20.5527 4.27481 21.2019 4.56101C21.851 4.84721 22.414 5.23564 22.8909 5.72631C23.3679 6.21697 23.7454 6.79616 24.0236 7.46396C24.3018 8.13181 24.4409 8.8405 24.4409 9.59009C24.4409 10.3396 24.3018 11.0449 24.0236 11.7059C23.7454 12.3669 23.3679 12.9428 22.8909 13.4333C22.414 13.924 21.851 14.3124 21.2019 14.5986C20.5527 14.8848 19.8573 15.0279 19.1154 15.0279C18.4 15.0279 17.7344 14.8882 17.1184 14.6088C16.5023 14.3294 15.9625 13.9512 15.4988 13.4742V14.7826H13.5117V0.472412H15.5187ZM15.7472 11.0006C15.926 11.4368 16.1745 11.8184 16.4924 12.1455C16.8103 12.4726 17.1813 12.7316 17.6052 12.9224C18.0291 13.1132 18.4862 13.2086 18.9763 13.2086C19.4533 13.2086 19.9036 13.1132 20.3276 12.9224C20.7515 12.7316 21.119 12.4726 21.4304 12.1455C21.7417 11.8184 21.9901 11.4368 22.1756 11.0006C22.361 10.5645 22.4538 10.0944 22.4538 9.59009C22.4538 9.08581 22.361 8.6122 22.1756 8.16926C21.9901 7.72632 21.7417 7.34133 21.4304 7.01423C21.1191 6.68719 20.7515 6.43161 20.3276 6.24764C19.9036 6.06367 19.4532 5.97162 18.9763 5.97162C18.4994 5.97162 18.049 6.06362 17.6251 6.24764C17.2012 6.43165 16.8303 6.68719 16.5123 7.01423C16.1944 7.34133 15.9427 7.72632 15.7572 8.16926C15.5717 8.6122 15.479 9.08581 15.479 9.59009C15.479 10.0944 15.5684 10.5645 15.7472 11.0006Z" /><path d="M25.5731 7.48477C25.838 6.83058 26.2024 6.25479 26.666 5.75734C27.1297 5.25989 27.6795 4.86807 28.3154 4.58187C28.9513 4.29567 29.6401 4.15259 30.382 4.15259C31.1106 4.15259 31.7862 4.28888 32.4089 4.56142C33.0315 4.83401 33.568 5.21222 34.0184 5.69605C34.4689 6.17983 34.8199 6.75228 35.0716 7.41325C35.3233 8.07427 35.4492 8.79319 35.4492 9.57005V10.2447H27.2026C27.2689 10.6672 27.4013 11.059 27.6 11.4201C27.7988 11.7813 28.0471 12.0947 28.3452 12.3605C28.6433 12.6263 28.9811 12.8342 29.3586 12.984C29.7362 13.1339 30.1369 13.2089 30.5609 13.2089C31.7664 13.2089 32.7401 12.6978 33.482 11.6756L34.9326 12.7796C34.4291 13.4746 33.8065 14.0198 33.0647 14.415C32.3228 14.8102 31.4882 15.0079 30.5609 15.0079C29.8058 15.0079 29.1004 14.8715 28.4446 14.599C27.7888 14.3265 27.2192 13.9448 26.7357 13.4541C26.2522 12.9635 25.8713 12.3877 25.5931 11.7267C25.3149 11.0657 25.1758 10.3468 25.1758 9.56996C25.1757 8.83404 25.3082 8.13896 25.5731 7.48477ZM28.3651 6.67724C27.802 7.16107 27.4278 7.80503 27.2423 8.60913H33.4223C33.2501 7.80503 32.8825 7.16107 32.3195 6.67724C31.7564 6.19345 31.0974 5.95153 30.3423 5.95153C29.5871 5.95153 28.9281 6.19345 28.3651 6.67724Z" /><path d="M39.2044 6.9121C38.7805 7.3891 38.5686 8.03645 38.5686 8.85421V14.7828H36.5615V4.35673H38.5486V5.64466C38.8004 5.22217 39.1282 4.88824 39.5323 4.64293C39.9363 4.39758 40.4165 4.2749 40.973 4.2749H41.6684V6.19657H40.8339C40.1715 6.19662 39.6283 6.43509 39.2044 6.9121Z" /></svg>
                <svg className="col-sapn-1 w-24" viewBox="0 0 70 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_296)"><path d="M13.4819 8.6843H7.59898C7.44739 8.6843 7.32495 8.80072 7.32495 8.94485V11.6797C7.32495 11.8238 7.44739 11.9421 7.59898 11.9421H9.89422V15.3403C9.89422 15.3403 9.3792 15.5066 7.95463 15.5066C6.27353 15.5066 3.92582 14.9227 3.92582 10.0148C3.92582 5.10685 6.3707 4.46009 8.66595 4.46009C10.6522 4.46009 11.5092 4.79271 12.0534 4.95347C12.2244 5.00337 12.3819 4.84075 12.3819 4.69662L13.0388 2.05418C13.0388 1.98581 13.0154 1.90451 12.9338 1.85092C12.7123 1.70124 11.3635 0.982423 7.95463 0.982423C4.02882 0.980576 0 2.56973 0 10.2051C0 17.8404 4.61186 18.9787 8.49881 18.9787C11.7172 18.9787 13.6684 17.6704 13.6684 17.6704C13.7481 17.6279 13.7578 17.5208 13.7578 17.4727V8.9467C13.7578 8.80256 13.6354 8.68615 13.4838 8.68615L13.4819 8.6843Z" fill="currentColor" /><path d="M43.7983 1.89521C43.7983 1.74923 43.6778 1.63281 43.5263 1.63281H40.2146C40.063 1.63281 39.9405 1.75108 39.9405 1.89521V7.98021H34.7787V1.89521C34.7787 1.74923 34.6562 1.63281 34.5047 1.63281H31.193C31.0414 1.63281 30.9189 1.75108 30.9189 1.89521V18.3744C30.9189 18.5204 31.0414 18.6387 31.193 18.6387H34.5047C34.6562 18.6387 34.7787 18.5204 34.7787 18.3744V11.3248H39.9405L39.9308 18.3726C39.9308 18.5186 40.0533 18.6368 40.2049 18.6368H43.5243C43.6759 18.6368 43.7964 18.5186 43.7983 18.3726V1.89521Z" fill="currentColor" /><path d="M19.7327 4.05698C19.7327 2.9224 18.7765 2.00586 17.5968 2.00586C16.4171 2.00586 15.4609 2.9224 15.4609 4.05698C15.4609 5.19157 16.4171 6.10811 17.5968 6.10811C18.7765 6.10811 19.7327 5.18972 19.7327 4.05698Z" fill="currentColor" /><path d="M19.4955 14.8984V7.29072C19.4955 7.14658 19.373 7.02832 19.2214 7.02832H15.9195C15.7679 7.02832 15.6318 7.17615 15.6318 7.32213V18.2208C15.6318 18.5405 15.8417 18.6366 16.1138 18.6366H19.0893C19.4158 18.6366 19.4955 18.485 19.4955 18.2153V14.8984Z" fill="currentColor" /><path d="M56.384 7.05458H53.0976C52.946 7.05458 52.8236 7.17284 52.8236 7.31883V15.3995C52.8236 15.3995 51.9879 15.9797 50.8043 15.9797C49.6207 15.9797 49.304 15.4679 49.304 14.3647V7.31698C49.304 7.171 49.1815 7.05273 49.0299 7.05273H45.6949C45.5453 7.05273 45.4209 7.171 45.4209 7.31698V14.8969C45.4209 18.1732 47.341 18.9751 49.9842 18.9751C52.1511 18.9751 53.9003 17.8368 53.9003 17.8368C53.9003 17.8368 53.9838 18.4374 54.0208 18.5076C54.0577 18.5778 54.1568 18.6499 54.2618 18.6499L56.384 18.6407C56.5337 18.6407 56.6581 18.5224 56.6581 18.3783V7.31698C56.6581 7.171 56.5337 7.05273 56.3821 7.05273L56.384 7.05458Z" fill="currentColor" /><path d="M65.3685 6.68301C63.5009 6.68301 62.2318 7.47574 62.2318 7.47574V1.89521C62.2318 1.74923 62.1093 1.63281 61.9577 1.63281H58.6363C58.4847 1.63281 58.3623 1.75108 58.3623 1.89521V18.3744C58.3623 18.5204 58.4847 18.6387 58.6363 18.6387H60.9413C61.0443 18.6387 61.124 18.5869 61.1823 18.4982C61.2386 18.4095 61.3222 17.7388 61.3222 17.7388C61.3222 17.7388 62.6807 18.962 65.2519 18.962C68.2701 18.962 70.0018 17.5059 70.0018 12.4262C70.0018 7.34639 67.2362 6.68301 65.3685 6.68301ZM64.0722 15.9667C62.9314 15.9334 62.1599 15.4419 62.1599 15.4419V10.2235C62.1599 10.2235 62.9217 9.77818 63.8584 9.69872C65.042 9.59709 66.1828 9.93709 66.1828 12.622C66.1828 15.453 65.6678 16.011 64.0742 15.9667H64.0722Z" fill="currentColor" /><path d="M29.0145 7.02646H26.5307C26.5307 7.02646 26.5268 3.90727 26.5268 3.90542C26.5268 3.78716 26.4627 3.72803 26.3189 3.72803H22.9334C22.8012 3.72803 22.7312 3.78346 22.7312 3.90357V7.12809C22.7312 7.12809 21.0346 7.51799 20.9199 7.5494C20.8052 7.58081 20.7217 7.6806 20.7217 7.80071V9.82781C20.7217 9.97379 20.8441 10.0902 20.9957 10.0902H22.7312V14.9649C22.7312 18.5867 25.4035 18.9415 27.2051 18.9415C28.0291 18.9415 29.0145 18.6901 29.1777 18.6329C29.2768 18.5978 29.3332 18.5017 29.3332 18.3963V16.1678C29.3351 16.0218 29.2069 15.9054 29.0611 15.9054C28.9154 15.9054 28.5461 15.9609 28.1652 15.9609C26.9447 15.9609 26.5307 15.4213 26.5307 14.7228C26.5307 14.0243 26.5307 10.0902 26.5307 10.0902H29.0145C29.1661 10.0902 29.2885 9.97194 29.2885 9.82781V7.28885C29.2885 7.14287 29.1661 7.02646 29.0145 7.02646Z" fill="currentColor" /></g><defs><clipPath id="clip0_1_296"><rect width={70} height={18} fill="white" transform="translate(0 0.980469)" /></clipPath></defs></svg>
                <svg className="col-sapn-1 w-40" viewBox="0 0 180 54" fill="currentColor" role="img" focusable="false"><path d="M89.515 20.5c-4.424 0-7.614 2.925-7.614 7.313 0 4.387 3.59 7.312 8.014 7.312 2.673 0 5.03-1.072 6.488-2.88l-3.066-1.796c-.81.898-2.04 1.422-3.422 1.422-1.919 0-3.55-1.016-4.155-2.64h11.228c.088-.456.14-.927.14-1.423 0-4.383-3.19-7.308-7.613-7.308zm-3.791 5.89c.5-1.62 1.871-2.64 3.787-2.64 1.919 0 3.29 1.02 3.786 2.64h-7.573zm46.938-5.89c-4.424 0-7.613 2.925-7.613 7.313 0 4.387 3.59 7.312 8.014 7.312 2.672 0 5.028-1.072 6.487-2.88l-3.065-1.796c-.81.898-2.04 1.422-3.422 1.422-1.92 0-3.551-1.016-4.156-2.64h11.228c.088-.456.14-.927.14-1.423 0-4.383-3.189-7.308-7.613-7.308zm-3.787 5.89c.501-1.62 1.872-2.64 3.787-2.64 1.919 0 3.29 1.02 3.787 2.64h-7.574zm-15.639 1.422c0 2.438 1.571 4.063 4.007 4.063 1.651 0 2.889-.76 3.526-1.999l3.078 1.8c-1.275 2.153-3.663 3.449-6.604 3.449-4.428 0-7.613-2.925-7.613-7.313 0-4.387 3.189-7.312 7.613-7.312 2.941 0 5.325 1.296 6.604 3.45l-3.078 1.799c-.637-1.24-1.875-1.999-3.526-1.999-2.432 0-4.007 1.625-4.007 4.063zm33.05-11.78v18.687h-3.607V16.03h3.607zM47.806 14l14.806 26H33l14.806-26zm37.016 2.031l-11.103 19.5-11.103-19.5h4.163l6.94 12.188 6.94-12.188h4.163zm23.606 4.875v3.937a4.517 4.517 0 00-1.283-.2c-2.328 0-4.007 1.626-4.007 4.063v6.013h-3.606V20.906h3.606v3.738c0-2.064 2.369-3.738 5.29-3.738z" fill="#fff"></path></svg>
                <svg className="col-span-1 w-40" viewBox="0 0 180 56" fill="currentColor" role="img" focusable="false"><path d="M45.249 23.464c-2.499 0-3.725 2.207-3.725 5.154v7.385H38V20.419h3.462v4.043h.06c.74-2.486 2.213-4.495 4.485-4.495 1.599 0 2.273.56 2.273.56l-1.59 3.21s-.507-.273-1.441-.273zm42.596 2.14V36h-3.432V26.87c0-2.622-.82-4.01-2.916-4.01-2.17 0-3.22 1.756-3.22 5.124V36h-3.402v-9.131c0-2.52-.81-4.01-2.885-4.01-2.368 0-3.28 2.08-3.28 5.124V36h-3.462V20.419h3.462v3.529h.031c.54-2.443 2.011-3.95 4.495-3.95 2.463 0 4.068 1.327 4.677 3.679.58-2.264 2.123-3.68 4.495-3.68 3.31 0 5.438 2.08 5.438 5.606zm-32.64-5.637c-3.185 0-5.27 1.5-6.22 4.206l2.932 1.069c.535-1.633 1.65-2.563 3.35-2.563 1.914 0 3.038.845 3.038 2.14 0 1.326-.895 1.603-2.916 1.93-2.248.363-7.595.482-7.595 5.003 0 2.648 2.21 4.641 5.529 4.641 2.495 0 4.194-1.022 4.98-2.924h.031V36h3.433v-9.584c-.002-4.193-2.107-6.45-6.562-6.45zm3.19 8.7c0 3.267-1.614 5.366-4.192 5.366-1.823 0-2.916-1.026-2.916-2.504 0-1.386 1.124-2.349 3.28-2.745 2.206-.406 3.317-.908 3.827-2.11v1.992zm41.661-8.67c-2.626 0-4.36 1.447-5.103 3.62v-3.198h-3.646V42h3.615v-9.196h.03c.805 2.354 2.48 3.649 5.104 3.649 4.16 0 7.138-3.436 7.138-8.29-.002-4.82-2.978-8.165-7.138-8.165zm-.897 13.563c-2.882 0-4.48-2.095-4.48-5.35 0-3.255 1.788-5.35 4.48-5.35 2.69 0 4.48 2.197 4.48 5.35 0 3.155-1.788 5.35-4.48 5.35zM143 35.93v.098l-14.108.005v-.102c2.035-1.152 3.439-2.325 4.702-3.55h5.793L143 35.93zm-3.496-18.414L135.928 14h-.103s.06 6.552-5.944 12.51c-5.875 5.832-12.784 5.846-12.784 5.846v.102l3.643 3.577s6.808.067 12.822-5.846c5.993-5.892 5.942-12.673 5.942-12.673z" fill="#fff"></path></svg>
                <svg className="col-span-1 w-40 hidden sm:block md:hidden lg:block" viewBox="0 0 180 56" fill="currentColor" role="img" focusable="false"><path d="M34 18.2a2.2 2.2 0 012.2-2.2h8.6a2.2 2.2 0 012.2 2.2v1.7a1.1 1.1 0 01-1.1 1.1H35.1a1.1 1.1 0 01-1.1-1.1v-1.7zM34 25.1a1.1 1.1 0 011.1-1.1h20.7a2.2 2.2 0 012.2 2.2v5.7a1.1 1.1 0 01-1.1 1.1H36.2a2.2 2.2 0 01-2.2-2.2v-5.7zM45 37.1a1.1 1.1 0 011.1-1.1h10.8a1.1 1.1 0 011.1 1.1v.7a2.2 2.2 0 01-2.2 2.2h-8.6a2.2 2.2 0 01-2.2-2.2v-.7zM71.596 30.741h2.311l4.293 7.017h5.256l-4.76-7.512c2.641-.909 4.182-2.945 4.182-5.89 0-4.127-2.89-6.356-7.54-6.356H67v19.758h4.596v-7.017zm0-3.742V21.88h3.494c2.174 0 3.275.936 3.275 2.56 0 1.595-1.1 2.558-3.275 2.558h-3.494zM91.363 38.06c2.89 0 5.531-1.458 6.605-4.237L94.28 32.64c-.413 1.266-1.486 1.926-2.862 1.926-1.678 0-2.862-1.128-3.164-3.11h9.824v-1.155c0-4.1-2.395-7.348-6.797-7.348-4.183 0-7.265 3.247-7.265 7.54 0 4.513 2.972 7.568 7.347 7.568zm-.138-11.694c1.624 0 2.477 1.1 2.505 2.394H88.39c.44-1.596 1.486-2.394 2.834-2.394zM100.573 33.878c0 2.972 1.569 4.018 4.706 4.018 1.046 0 1.871-.083 2.642-.193v-3.605c-.496.055-.743.083-1.266.083-1.101 0-1.734-.22-1.734-1.431v-5.862h2.834v-3.632h-2.834v-4.018h-4.348v4.018h-1.844v3.632h1.844v6.99zM123.672 30.52c0-4.512-3-7.567-7.265-7.567-4.293 0-7.265 3.055-7.265 7.568s2.972 7.54 7.265 7.54c4.265 0 7.265-3.027 7.265-7.54zm-10.154 0c0-2.53 1.128-3.962 2.889-3.962s2.89 1.431 2.89 3.963-1.129 3.962-2.89 3.962c-1.761 0-2.889-1.43-2.889-3.962zM139.527 30.52c0-4.512-2.999-7.567-7.265-7.567-4.293 0-7.265 3.055-7.265 7.568s2.972 7.54 7.265 7.54c4.266 0 7.265-3.027 7.265-7.54zm-10.154 0c0-2.53 1.128-3.962 2.889-3.962 1.762 0 2.89 1.431 2.89 3.963s-1.128 3.962-2.89 3.962c-1.761 0-2.889-1.43-2.889-3.962zM146 18h-4.403v19.758H146V18z" fill="#fff"></path></svg>
                {/* <img className="hidden lg:block col-sapn-1 w-40" src="https://cdn.sanity.io/images/ornj730p/production/983e3590554239cce3b082ba83217e903fdfa368-180x56.svg?q=95&auto=format&dpr=2" />
                <img className="hidden lg:block col-sapn-1 w-40" src="https://cdn.sanity.io/images/ornj730p/production/46dccfe170a19a0d1806939e8ef2c58427f6c8de-180x56.svg?q=95&auto=format&dpr=2" />
                <img className="hidden lg:block col-sapn-1 w-40" src="https://cdn.sanity.io/images/ornj730p/production/b94c6b4f9456a8e78753bedce8b9850de7f8fb44-180x56.svg?q=95&auto=format&dpr=2" />
                <img className="hidden sm:block col-sapn-1 w-48" src="https://cdn.sanity.io/images/ornj730p/production/2c64ec9fd8f4feb117e91769cb091a5af5a64816-180x56.svg?q=95&auto=format&dpr=2" /> */}
                <svg className="col-sapn-1 w-24 hidden sm:block" viewBox="0 0 519 123"><g fill="none" fillRule="evenodd"><path d="M31.5 49.6C55 41.5 59 20.4 56 1c0-.7.6-1.2 1.2-1C79.7 11 105 35 105 71c0 27.6-21.4 52-52.5 52a50 50 0 0 1-28.2-92.7c.6-.4 1.4 0 1.4.7.3 3.7 1.3 13 5.4 18.6h.4z" fill="white"></path><path d="M171.2 101.1l1.7-2 5.3 16.8-.7.7c-4 3.7-10 5.6-17.7 5.6h-.3c-7 0-12.5-2-16.3-5.7-3.8-3.8-5.8-9.5-5.8-16.7V54h-13.5V35.5h13.5V13.2h20.8v22.3h16.5V54h-16.6v41.3c0 1.9.5 8 6.3 8 3 0 5.8-1.1 6.8-2.3zm11 19.2V35.6H203v84.7h-20.8zM192.5 1A12.5 12.5 0 1 1 180 13.6C180 6.8 185.7 1 192.5 1zm66.4 32.5c18 0 27.9 9.8 27.9 27.7v59H266V66.2c-.4-9.6-5-14-14.8-14-8.8 0-15.9 5.4-19.5 10v58h-20.8V35.7h20.8v9c6-5.8 15.6-11 27.2-11zM356 44.4V4.6h20.8v115.8H356v-8.8a34.3 34.3 0 0 1-24.7 10.7c-22.7 0-37.9-17.8-37.9-44.3 0-26.6 15.2-44.4 37.9-44.4A34 34 0 0 1 356 44.4zm0 17.9a25.6 25.6 0 0 0-19.6-10c-12.9 0-21.5 10.3-21.5 25.7 0 15.3 8.6 25.6 21.5 25.6 7.5 0 15.7-4 19.6-9.8V62.3zm69.4-28.7c24.6 0 41.7 19 41.7 46v5.7h-62.9c2.1 11.9 11.5 19.5 24.3 19.5 8.1 0 17-3.5 22.1-8.6L452 95l9.9 14.2-1 .9a48.6 48.6 0 0 1-34.1 12.2c-26 0-44.3-18.3-44.3-44.4a42.8 42.8 0 0 1 43-44.3zm-21.3 36h42.7c-1.2-12.7-11.7-18.5-21.4-18.5-14.6 0-20.1 11-21.3 18.6zm113.3-36h1.5v21l-1.8-.3c-1.5-.3-3.4-.5-5.3-.5-6.7 0-16 4.7-19.5 9.7v56.7h-20.8V35.6h20.9V45c6.9-7.2 16-11.4 25-11.4z" fill="white"></path></g></svg>
                {/* <svg className="col-sapn-1 w-24" viewBox="0 0 71 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M53.9692 3.09832H55.5214V13.2037H53.9692V3.09832ZM50.8788 3.09832H52.417V13.2037H50.8788V3.09832ZM62.8349 10.0687C62.8349 11.8372 61.4505 12.3769 60.0102 12.3769C58.9055 12.3769 58.2482 11.9061 58.2482 11.1941C58.2482 10.1606 60.0382 9.81608 62.8349 9.5979V10.0687ZM64.2333 10.3903L64.2473 8.64478C64.2752 6.52036 63.1845 5.55576 60.6255 5.55576C58.8635 5.55576 57.0876 6.46295 56.9617 8.0821H58.5559C58.6258 7.15195 59.353 6.58926 60.6395 6.58926C61.8001 6.58926 62.7091 7.03711 62.7091 8.41511V8.59885C58.9754 8.93187 56.5282 9.4601 56.5282 11.2285C56.5282 12.6065 57.9546 13.3874 59.6746 13.3874C61.2967 13.3874 62.2336 12.9625 62.793 12.1817C62.8069 12.5262 62.8489 12.8707 62.9188 13.2037H64.471C64.2752 12.4917 64.2193 11.6419 64.2333 10.3788V10.3903ZM69.8128 5.67059C68.6102 5.70504 67.7013 6.16438 67.2398 7.01415V5.70504H65.7296V13.2037H67.2678V9.26488C67.2678 7.5998 67.9809 6.96821 69.4073 6.96821C69.7009 6.9797 69.9806 6.99118 70.2743 7.03711V5.68208C70.1205 5.67059 69.9666 5.67059 69.8128 5.67059ZM39.2163 3.83326H37.6641V5.70504H36.2238V6.72706H37.6641V11.3204C37.6641 12.8821 38.0697 13.2037 39.8176 13.2037H40.9503V12.1357H40.1672C39.2863 12.1357 39.2163 11.9405 39.2163 11.1711V6.72706H40.9503V5.70504H39.2163V3.83326ZM31.763 7.41606L30.3367 7.15195C29.176 6.93376 28.323 6.4974 28.323 5.60169C28.323 4.46484 29.9871 4.12034 30.938 4.12034C32.1685 4.12034 33.5949 4.52226 34.0004 5.68208H35.6785C35.189 3.74139 33.2313 2.92607 31.0219 2.92607C29.0362 2.92607 26.575 3.74139 26.575 5.68208C26.575 7.35865 28.2531 8.13951 29.9451 8.43808L31.4833 8.7022C33.0355 9.00077 34.1263 9.41417 34.1263 10.4936C34.1263 11.4927 33.0915 12.1931 31.2596 12.1931C29.3438 12.1931 28.1832 11.4697 27.8615 10.0687H26.1695C26.4911 12.0783 28.323 13.3874 31.2176 13.3874C33.6648 13.3874 35.9022 12.3309 35.9022 10.3558C35.9022 8.32325 33.6368 7.7376 31.763 7.40458V7.41606ZM42.8242 8.79407C42.964 7.27826 44.2225 6.66965 45.579 6.66965C47.229 6.66965 48.152 7.72611 48.2079 8.79407H42.8242ZM45.579 5.57873C43.0898 5.57873 41.1461 7.09453 41.1461 9.47158C41.1461 11.6879 42.7402 13.3874 45.6209 13.3874C47.8443 13.3874 49.3126 12.3195 49.7042 11.0333H48.138C47.7464 11.7683 46.9913 12.2735 45.6349 12.2735C44.2785 12.2735 42.8661 11.4927 42.8242 9.88498H49.844C50.0398 7.49645 48.3897 5.59021 45.5929 5.59021L45.579 5.57873ZM21.0095 4.56819L4.70442 11.3893L3.27807 11.975L0.355469 13.2037V14.6735L3.26409 13.4563L5.7532 12.4113L17.7792 7.38161C18.2966 10.597 15.5418 13.5482 11.6264 13.9731C11.3187 14.0075 10.9971 14.0305 10.6755 14.0305C9.4589 14.0305 8.25629 13.7664 7.17954 13.2726L7.09564 13.3185L5.55743 13.9501C9.4589 16.2812 14.9265 15.5692 17.7653 12.3539C18.842 11.1367 19.4293 9.6668 19.4293 8.151C19.4293 7.96726 19.4293 7.78353 19.4014 7.5998C19.3594 7.07156 19.695 6.57778 20.2683 6.33663L21.0095 6.01509V4.56819ZM18.1009 2.85717L15.6118 3.89067L3.5997 8.92038C3.0823 5.70504 5.85109 2.75382 9.76654 2.32894C11.2908 2.16817 12.843 2.40932 14.1854 3.02942L15.6118 2.43229L15.8215 2.34042C11.92 0.00930202 6.45239 0.732753 3.61369 3.93661C2.52295 5.16533 1.94962 6.6352 1.94962 8.151C1.94962 8.33473 1.94962 8.51847 1.9636 8.7022C2.01954 9.21895 1.68393 9.72422 1.11059 9.96537L0.355469 10.2754V11.7453L2.5649 10.8151L3.27807 10.5166L3.99125 10.2295L16.6466 4.92418L18.0729 4.32704L21.0095 3.09832V1.62845L18.1009 2.85717Z" /></svg>
                <svg className="col-span-1 w-40" viewBox="0 0 180 54" fill="currentColor" role="img" focusable="false"><path d="M77.53 23.818a.528.528 0 01-.697-.137 4.043 4.043 0 00-3.437-1.729c-2.619 0-4.226 2.069-4.226 5.022 0 2.954 1.636 5.062 4.255 5.062a4.007 4.007 0 003.444-1.807.52.52 0 01.687-.154l1.244.72a.528.528 0 01.193.777 6.468 6.468 0 01-5.564 2.872c-4.187 0-7.025-3.032-7.025-7.453s2.838-7.414 6.962-7.414a6.606 6.606 0 015.539 2.738.532.532 0 01-.144.765l-1.23.738zM86.683 33.642v-.6c-.655.842-1.568 1.365-3.038 1.365-2.174 0-3.683-1.186-3.683-3.267 0-2.591 2.315-3.036 3.742-3.235 1.532-.222 2.838-.327 2.838-1.327 0-.885-1.025-1.124-1.892-1.124a6.44 6.44 0 00-2.858.722.52.52 0 01-.713-.225l-.449-.935a.526.526 0 01.216-.692 8.608 8.608 0 014.02-1.007c2.494 0 4.255 1.023 4.255 3.497v6.828a.522.522 0 01-.523.523h-1.369a.524.524 0 01-.546-.523zm-.141-4.721c-.481.363-1.368.484-2.314.653-.947.17-1.732.422-1.732 1.448 0 .944.684 1.385 1.673 1.385 1.227 0 2.373-.683 2.373-2.27V28.92zM91.37 31.46a.524.524 0 01.724-.068 4.875 4.875 0 003.044.98c1.13 0 1.964-.362 1.964-1.244 0-.804-.766-.964-2.619-1.288-1.964-.327-3.843-.98-3.843-3.215 0-2.33 2.014-3.313 4.308-3.313a6.454 6.454 0 013.99 1.307.52.52 0 01.072.755l-.654.767a.527.527 0 01-.72.082 4.623 4.623 0 00-2.783-.889c-.965 0-1.81.281-1.81 1.043 0 .846 1.185 1.006 2.373 1.209 2.537.44 4.148 1.163 4.148 3.267 0 2.209-1.771 3.575-4.583 3.575a6.612 6.612 0 01-4.256-1.386.53.53 0 01-.068-.751l.713-.83zM101.119 33.644V20.345a.523.523 0 01.524-.523h1.509a.523.523 0 01.524.523v4.542a3.936 3.936 0 013.241-1.568c2.232 0 3.541 1.587 3.541 3.855v6.47a.523.523 0 01-.523.522h-1.509a.524.524 0 01-.524-.522v-5.882c0-1.127-.364-2.15-1.811-2.15-1.371 0-2.415.964-2.415 2.572v5.463a.524.524 0 01-.524.523h-1.509a.52.52 0 01-.524-.526zM127.064 33.815l-1.086-3.202h-5.494l-1.089 3.202a.525.525 0 01-.495.353h-1.771a.527.527 0 01-.519-.456.52.52 0 01.029-.247l4.945-13.301a.53.53 0 01.492-.327h2.419a.53.53 0 01.494.343l4.927 13.298a.517.517 0 01-.252.644.525.525 0 01-.243.059h-1.869a.525.525 0 01-.488-.366zm-3.804-11.661l-2.115 6.227h4.148l-2.033-6.227zM133.709 24.082v.824a3.857 3.857 0 013.274-1.588c2.897 0 4.769 2.392 4.769 5.525 0 3.134-1.872 5.555-4.769 5.555a3.844 3.844 0 01-3.274-1.608v4.336a.523.523 0 01-.523.523h-1.509a.523.523 0 01-.524-.523v-13.07a.523.523 0 01.524-.523h1.509a.52.52 0 01.491.341.509.509 0 01.032.209zm2.737 8.097c1.771 0 2.619-1.51 2.619-3.336 0-1.826-.864-3.297-2.619-3.297-1.754 0-2.737 1.467-2.737 3.297s.934 3.336 2.737 3.336zM145.887 24.082v.824a3.849 3.849 0 013.274-1.588c2.9 0 4.772 2.391 4.772 5.525 0 3.134-1.872 5.555-4.772 5.555a3.85 3.85 0 01-3.274-1.608v4.336a.522.522 0 01-.523.523h-1.509a.523.523 0 01-.524-.523v-13.07a.523.523 0 01.524-.523h1.509a.52.52 0 01.523.55zm2.74 8.097c1.771 0 2.619-1.51 2.619-3.336 0-1.826-.865-3.297-2.619-3.297-1.754 0-2.74 1.467-2.74 3.297s.946 3.336 2.74 3.336z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.466 13C29.895 13 27 15.89 27 19.454v15.092C27 38.111 29.895 41 33.466 41h14.97c3.57 0 6.465-2.89 6.465-6.454V19.454c0-3.565-2.894-6.454-6.465-6.454h-14.97zm12.018 10.414a5.918 5.918 0 00-3.81-1.396c-1.15 0-2.299.38-2.299 1.435 0 .963 1.024 1.34 2.284 1.803l.373.138c2.493.84 4.546 1.869 4.546 4.308 0 2.649-2.06 4.458-5.43 4.665l-.305 1.42a.575.575 0 01-.565.452H38.16a.586.586 0 01-.558-.702l.328-1.498a7.791 7.791 0 01-3.4-1.859.567.567 0 010-.816l1.176-1.147a.572.572 0 01.802 0 5.675 5.675 0 004.003 1.564c1.534 0 2.575-.65 2.575-1.679 0-.93-.853-1.242-2.473-1.834-.172-.063-.353-.128-.542-.199-2.082-.74-4.053-1.8-4.053-4.261 0-2.85 2.385-4.24 5.196-4.377l.296-1.446a.575.575 0 01.562-.449h2.111a.572.572 0 01.562.685l-.328 1.616a8.705 8.705 0 012.932 1.64.56.56 0 01.03.823l-1.097 1.098a.582.582 0 01-.798.016z" fill="#fff"></path></svg> */}
            </div>
        </div>
    )
}

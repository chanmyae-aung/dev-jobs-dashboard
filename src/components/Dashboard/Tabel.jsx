import Cookies from "js-cookie";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Tabel = () => {
  const dark = Cookies.get("dark")
  return (
    <div className={`flex flex-col rounded bg-white shadow border border-b-0 w-full ${dark && "dark"}`}>
      <div className="flex justify-between items-center p-5">
        <h3 className="text-xs font-bold">PROJECTS</h3>
        <BsThreeDotsVertical className="text-lg text-[#a8b2bc]" />
      </div>
      <table class="">
        <thead className="bg-[#f4f5f6]">
          <tr>
            <th class="py-2 px-4 border-b  text-gray-400 text-[11px] text-start">
              #
            </th>
            <th class="py-2 px-4 border-b  text-gray-400 text-[11px] text-start">
              Name
            </th>
            <th class="py-2 px-4 border-b  text-gray-400 text-[11px] text-start">
              Project manger
            </th>
            <th class="py-2 px-4 border-b  text-gray-400 text-[11px] text-end">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-5 px-4 border-b  font-thin text-xs">1</td>
            <td class="py-5 px-4 border-b  text-xs">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="avatar-img h-[25px]"
                  viewBox="-381.005 -57.828 64 64"
                >
                  <path d="M-373.848-13.722c-.26-.03-.665-.26-.953-.5-2.74-2.685.778-5.77 4.848-7.56v-5.105c.952.607 1.472.635 1.5.72l3.116-3.086-1.04-2.655c9.12-3.145 12.782-4.357 20.198-5.598l-1.33-1.242 2.165-1.24c5 1.646 9.696 2.078 8.887 6.26.203-2.828-3.318-3.925-8.685-5.425l-1.038.634 2 1.645c-8.886 1.53-14.34 3.26-20.832 5.5l.893 2.3-3.26 3.202c.55.144 6.232 2.05 12.146-2.077 0 0 .117-.087.117-.116-.172-.288-.578-.607-1.067-1.038 1.73.116 2.854 1.645 2.653 3.232h-.807a2.9 2.9 0 0 0-.231-1.443c-4.588 3.348-9.897 3.838-14.428 2.25v3.952c-2.192.78-6.118 3.2-6.1 5.54.144 1.124.722 1.528 1.24 1.818"></path>
                  <path
                    d="M-355.293-14.733c-4.908 2.482-9.6 4.473-16.852 4.76-9.435-.203-10.906-6.464-6.435-13.014 4.213-6.607 10.907-12.58 21.555-16.304 3.086-1.094 7.62-2.336 12.002-2.394 6.3-.058 12.4 1.905 12.003 7.936-.23 4.617-6.895 11.138-10.417 15.813-1.5 2.046-1.76 3.375.807 3.26 9.322-.607 17.775-3.838 25.624-7.185-5.308 3.607-32.75 17.196-32.864 7.936.028-1.185.576-2.424 1.47-3.752.867-1.327 2.08-2.714 3.32-4.127 1.875-2.135 6.518-7.242 8.078-10.302 2.626-5.8-3.26-6.1-8.34-7.877l-2.165 1.24 1.33 1.242c-7.416 1.24-11.08 2.452-20.198 5.598l1.04 2.655-3.116 3.086c-.087-.086-.55-.114-1.5-.72v5.107c-4.07 1.8-7.6 4.875-4.848 7.56.288.23.694.462.954.5 5 2.828 18.58-1 18.554-1"
                    fill="#f60"
                  ></path>
                </svg>
                <h1>Alibaba</h1>
              </div>
            </td>
            <td class="py-5 px-4 border-b text-gray-400 text-xs font-thin">
              Jon Richardson
            </td>
            <td class="py-5 px-4 border-b">
              <div className="flex items-center justify-center rounded-md bg-green-500">
                <p className="text-[10px] text-white">Completed</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="py-5 px-4 border-b font-thin text-xs">2</td>
            <td class="py-5 px-4 border-b text-xs">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="avatar-img h-[15px]"
                  viewBox="0 0 240 180.037"
                >
                  <path d="M238.553 22.362s-6.882-5.327-29.168-13.512C189.83 1.653 174.893 0 174.893 0l.074 42.679c0 18.039-20.385 37.194-55.199 37.194h-.996c-34.81 0-55.188-19.155-55.188-37.194L63.652 0S48.729 1.652 29.166 8.85C6.881 17.035 0 22.362 0 22.362c1.652 34.229 54.826 62.43 119.263 62.445h.015c64.441-.015 117.628-28.216 119.275-62.445"></path>
                  <path d="M238.582 118.203s-6.881 5.312-29.167 13.504c-19.569 7.198-34.493 8.843-34.493 8.843l.075-42.672c0-18.035-20.386-37.183-55.199-37.183l-.49-.015h-.015l-.483.015c-34.817 0-55.195 19.148-55.195 37.183l.076 42.672s-14.931-1.645-34.493-8.843C6.919 123.515.024 118.203.024 118.203c1.652-34.226 54.84-62.427 119.285-62.449 64.44.022 117.629 28.223 119.273 62.449M11.611 179.946c-5.432 0-5.53-4.135-5.53-5.733v-7.528c0-.469-.03-1.072.936-1.072h2.799c.92 0 .868.635.868 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.708c1.939 0 2.052-1.435 2.052-1.978v-7.528c0-.438-.062-1.072.853-1.072H23.2c1.02 0 .928.635.928 1.072v7.528c0 1.601-.106 5.733-5.545 5.733M37.632 179.026c-1.916-2.58-4.655-5.824-7.446-9.266v9.174c0 .407.098 1.012-.86 1.012h-2.618c-.943 0-.837-.604-.837-1.012v-12.268c0-.422-.038-1.057.837-1.057h5.107c1.441 0 3.501 2.897 4.844 4.828 1.049 1.449 2.965 3.651 4.255 5.312v-9.084c0-.422-.053-1.057.898-1.057h2.844c.905 0 .854.635.854 1.057v13.277h-5.243c-1.126.004-1.609.08-2.635-.916M47.244 179.946v-14.319h12.652c.77 0 5.968-.104 5.968 5.356 0 5.568.596 8.963-5.862 8.963h-6.82l-1.471-2.987v2.987m7.513-3.772c2.301 0 2.127-2.202 2.127-3.214 0-3.38-.951-3.518-2.467-3.518h-7.22v6.73l7.56.002zM70.813 165.718h11.664c.981 0 .853.646.853 1.84 0 1.116.151 1.75-.853 1.75h-9.219c-.242 0-1.086-.119-1.086.74 0 .875-.159 1.223.762 1.223h8.148l1.313 2.609c.188.362.166.68-.551.68h-8.436l-1.305-2.551v3.758c0 .875.777.709 1.003.709h9.574c.951 0 .868.664.868 1.75 0 1.162.083 1.812-.868 1.812H70.563c-1.011 0-2.98-.315-2.98-3.472v-7.891c0-.83.43-2.957 3.23-2.957M86.475 165.626h12.758c1.712 0 4.202-.016 4.202 4.604 0 3.018-.641 3.168-2.015 4.104 2.301.393 1.992 3.334 1.992 4.857 0 .771-.279.754-.506.754h-3.742c-.785 0-.596-1.236-.596-1.885 0-1.75-.981-1.676-1.366-1.676h-5.507c-.528-.921-1.554-2.973-1.554-2.973v5.945l-.702.588h-3.765l-.377-.469v-12.613c.001-.888.627-1.236 1.178-1.236m10.162 3.788h-5.681c-.951 0-.905.315-.905.604v2.563h5.847c2.837 0 2.837-.709 2.837-1.448-.001-1.478-.121-1.719-2.098-1.719M125.404 165.718c.936 0 1.848.422 2.832 2.338.664 1.373 5.297 9.748 6.277 11.498v.482h-4.828l-1.39-2.52h-5.872l-1.27-2.883c-.361.588-2.3 4.27-2.964 5.401h-4.843v-.315c.988-1.857 7.733-14.004 7.733-14.004m2.817 3.972l-2.369 4.299.219.213h4.391l.219-.213-2.24-4.314-.22.015M137.576 165.626h12.766c1.705 0 4.195-.016 4.195 4.604 0 3.018-.635 3.168-2.008 4.104 2.311.393 1.992 3.334 1.992 4.857 0 .771-.287.754-.514.754h-3.742c-.783 0-.588-1.236-.588-1.885 0-1.75-.98-1.676-1.357-1.676h-5.521c-.529-.921-1.557-2.973-1.557-2.973v5.945l-.691.588h-3.773l-.377-.469v-12.613c-.001-.888.632-1.236 1.175-1.236m10.171 3.788h-5.688c-.951 0-.904.315-.904.604v2.563h5.854c2.821 0 2.821-.709 2.821-1.448-.001-1.478-.105-1.719-2.083-1.719M165.688 179.946c-.949-1.78-3.59-6.699-5.371-9.928v8.933c0 .377.061.995-.859.995h-2.58c-.966 0-.891-.618-.891-.995v-12.269c0-.438-.061-1.057.891-1.057h4.467c.664 0 1.613-.15 2.67 1.977.801 1.705 2.489 5.252 3.668 7.123 1.176-1.871 2.912-5.418 3.711-7.123 1.041-2.127 1.961-1.977 2.717-1.977h4.451c.904 0 .799.619.799 1.057v12.269c0 .377.137.995-.799.995h-2.611c-.95 0-.875-.618-.875-.995v-8.933c-1.811 3.229-4.422 8.146-5.416 9.928M185.092 179.976c-4.225 0-4.043-4.525-4.043-7.482 0-2.688-.303-6.896 4.993-6.941h9.416c5.312 0 4.964 4.271 4.964 6.941 0 2.957.213 7.482-4.089 7.482m-2.731-3.682c2.144 0 2.067-2.218 2.067-3.695 0-1.344.317-3.427-2.476-3.427h-4.736c-2.775 0-2.445 2.083-2.445 3.427 0 1.479-.136 3.695 2.008 3.695h5.582zM207.499 179.946c-5.417 0-5.522-4.135-5.522-5.733v-7.528c0-.469-.029-1.072.937-1.072h2.808c.92 0 .858.635.858 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.707c1.947 0 2.053-1.435 2.053-1.978v-7.528c0-.438-.045-1.072.859-1.072h2.821c1.026 0 .937.635.937 1.072v7.528c0 1.601-.092 5.733-5.553 5.733M223.04 165.626h12.767c1.705 0 4.193-.016 4.193 4.604 0 3.018-.648 3.168-2.021 4.104 2.31.393 2.008 3.334 2.008 4.857 0 .771-.287.754-.514.754h-3.742c-.77 0-.588-1.236-.588-1.885 0-1.75-.996-1.676-1.373-1.676h-5.508c-.527-.921-1.555-2.973-1.555-2.973v5.945l-.709.588h-3.758l-.377-.469v-12.613c0-.888.634-1.236 1.177-1.236m10.155 3.788h-5.674c-.951 0-.906.315-.906.604v2.563h5.855c2.821 0 2.821-.709 2.821-1.448.002-1.478-.119-1.719-2.096-1.719"></path>
                </svg>
                <h1>Under Armour</h1>
              </div>
            </td>
            <td class="py-5 px-4 border-b text-gray-400 text-xs font-thin">
              Alba Monday
            </td>
            <td class="py-5 px-4 border-b">
              <div className="flex items-center justify-center rounded-md bg-green-500">
                <p className="text-[10px] text-white">Completed</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="py-5 px-4 border-b font-thin text-xs">3</td>
            <td class="py-5 px-4 border-b text-xs">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="avatar-img h-[15px]"
                  viewBox="0 0 45.285 25.488"
                >
                  <path fill="#fff22d" d="M0 0h45.285v25.488H0V0z"></path>
                  <path
                    d="M5.733 2.388h33.792a3.697 3.697 0 0 1 3.686 3.686v13.435a3.697 3.697 0 0 1-3.686 3.686H5.733a3.697 3.697 0 0 1-3.686-3.686V6.073a3.696 3.696 0 0 1 3.686-3.685z"
                    fill="#cf4037"
                  ></path>
                  <path
                    d="M5.733 4.027h33.792c1.126 0 2.047.921 2.047 2.046v13.435a2.053 2.053 0 0 1-2.047 2.046H5.733a2.052 2.052 0 0 1-2.046-2.046V6.073c0-1.125.92-2.046 2.046-2.046z"
                    fill="#fff"
                  ></path>
                  <path d="M5.733 4.949h33.792c.618 0 1.125.506 1.125 1.124v13.435c0 .618-.506 1.124-1.125 1.124H5.733a1.128 1.128 0 0 1-1.125-1.124V6.073c0-.618.506-1.124 1.125-1.124z"></path>
                  <path
                    d="M37.069 12.748c0 .188.056.332.167.435a.556.556 0 0 0 .391.153.569.569 0 0 0 .57-.588.46.46 0 0 0-.173-.382.622.622 0 0 0-.397-.137.585.585 0 0 0-.389.142.463.463 0 0 0-.169.377zm-1.756.001c0-.304.057-.597.172-.877a2.33 2.33 0 0 1 .48-.746 2.203 2.203 0 0 1 1.594-.682c.36 0 .688.062.984.186.298.123.551.292.762.508s.373.456.482.724c.11.266.166.54.166.817 0 .494-.113.927-.339 1.301a2.324 2.324 0 0 1-.891.862 2.419 2.419 0 0 1-1.164.299c-.237 0-.485-.051-.746-.15a2.527 2.527 0 0 1-.737-.456c-.23-.205-.417-.456-.556-.757s-.207-.645-.207-1.029zM28.226 13.384v1.737c-1.373.019-2.58-.612-2.58-2.356 0-1.467.986-2.239 2.361-2.239 1.375 0 2.329.925 2.329 2.356v2.239H28.51v-2.255c0-.406-.22-.613-.483-.615s-.569.125-.577.492.12.696.776.641zM12.189 12.183v-1.688c1.422-.019 2.592.787 2.592 2.281 0 1.342-1.136 2.364-2.474 2.364s-2.203-1.236-2.203-2.356V8.733h1.701v3.98c0 .405.232.713.608.715.375.002.657-.176.651-.642s-.406-.658-.875-.603zM33.097 13.297v1.679c-1.322.02-2.469-.854-2.484-2.211-.015-1.321.95-2.239 2.274-2.239s2.242.925 2.242 2.356v1.704c0 1.279-1.133 2.341-2.64 2.341h-1.685l.001-1.557h1.689c.588 0 .956-.069.956-.7v-1.892c0-.406-.292-.613-.546-.615s-.548.125-.556.492c-.005.368.118.697.749.642zM18.826 10.521h1.768v2.563c0 .155.141.306.328.306.178 0 .352-.135.352-.306v-2.563h1.769v2.668c0 .401-.103.749-.307 1.042a1.941 1.941 0 0 1-.806.666 2.494 2.494 0 0 1-1.806.102 2.039 2.039 0 0 1-.664-.369 1.737 1.737 0 0 1-.464-.609 1.95 1.95 0 0 1-.17-.831v-2.669zM23.243 15.121h1.769v-2.563c0-.155.141-.329.327-.328h.222v-1.696a2.449 2.449 0 0 0-1.02.11 2.024 2.024 0 0 0-.663.369 1.734 1.734 0 0 0-.465.61 1.96 1.96 0 0 0-.17.83v2.668z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M12.384 6.669l-.198.003v3.483a2.687 2.687 0 0 1 2.946 2.668 2.687 2.687 0 0 1-2.683 2.681c-1.346 0-2.684-1.364-2.684-2.709V6.713H6.223l.002 6.115c.001 3.392 2.767 6.159 6.159 6.159s6.159-2.767 6.159-6.159-2.767-6.159-6.159-6.159z"
                    fill="#cf4037"
                  ></path>
                  <path
                    d="M38.906 10.127c0-.218.071-.394.214-.526a.747.747 0 0 1 .493-.216h.027a.733.733 0 0 1 .495.204.685.685 0 0 1 .226.539.686.686 0 0 1-.226.539.742.742 0 0 1-.495.204h-.003-.024a.752.752 0 0 1-.493-.216.695.695 0 0 1-.214-.528zm.138 0v.03c.007.15.064.288.171.413a.523.523 0 0 0 .419.188.524.524 0 0 0 .422-.188.676.676 0 0 0 .17-.413v-.014-.016-.003-.004a.672.672 0 0 0-.162-.428.528.528 0 0 0-.43-.195.525.525 0 0 0-.423.191.674.674 0 0 0-.167.42v.019zm.325-.378h.322l.036.002a.49.49 0 0 0 .038.004c.041.01.079.03.114.06.034.03.052.079.052.148l-.001.022-.003.022c-.006.024-.018.047-.035.069s-.046.041-.084.056v.004c.034.007.058.022.071.044a.215.215 0 0 1 .026.072l.004.032c.002.01.002.02.002.03l.002.038c0 .012 0 .022.002.032 0 .021.001.038.003.052a.115.115 0 0 0 .017.045l.005.008h-.14a.365.365 0 0 1-.032-.054.251.251 0 0 1-.01-.06l.001-.055.001-.021.001-.02a.1.1 0 0 0-.025-.07c-.017-.018-.058-.027-.123-.027h-.11v.307h-.136v-.74h.002zm.135.333h.155c.052 0 .088-.012.106-.036a.128.128 0 0 0 .028-.083c0-.047-.015-.077-.044-.091a.235.235 0 0 0-.104-.021h-.14v.231h-.001z"
                    fill="#fff"
                  ></path>
                </svg>
                <h1>Burgo</h1>
              </div>
            </td>
            <td class="py-5 px-4 border-b text-gray-400 text-xs font-thin">
              {" "}
              Rose Watson
            </td>
            <td class="py-5 px-4 border-b">
              <div className="flex items-center justify-center rounded-md bg-yellow-500">
                <p className="text-[10px] text-white">in-progress</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="py-5 px-4 border-b font-thin text-xs">4</td>
            <td class="py-5 px-4 border-b text-xs">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="avatar-img h-[25px]"
                  viewBox="0 0 192.756 192.756"
                >
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path fill="#fff" d="M0 0h192.756v192.756H0V0z"></path>
                    <path
                      d="M178.691 171.004c-22.973-15.594-52.488-47.338-52.488-64.881 0-16.428 20.328-28.262 20.328-44.969 0-14.758-11.277-31.464-19.492-39.401H45.452c7.657 8.354 19.074 24.644 19.074 39.401 0 16.707-19.91 28.542-19.91 44.969.14 20.328 29.377 48.73 47.477 64.881h86.598z"
                      fill="#c9222f"
                    ></path>
                    <path d="M29.858 164.461v-2.646c0-.834-.139-1.531-.417-1.809-.139-.279-.557-.559-1.252-.559-.557 0-.975.279-1.253.559-.278.277-.417.975-.417 1.947v2.508h3.339zm10.164 5.707H22.201v-8.631c0-2.646.417-4.455 1.253-5.568.835-1.254 2.088-1.811 3.897-1.811 1.114 0 1.95.277 2.646.695.696.557 1.392 1.254 1.811 2.229a3.779 3.779 0 0 1 1.113-2.229c.696-.418 1.531-.695 2.784-.695l2.367-.141h.139c.696 0 1.114-.139 1.114-.418h.695v5.711c-.417.137-.834.137-1.113.277h-2.505c-.975 0-1.671.277-1.95.557-.417.416-.557.975-.557 1.949v2.367h6.125v5.708h.002zm-17.821-24.781h17.821v5.848H22.201v-5.848zm10.86-15.037v-5.291c2.367.141 4.177.975 5.43 2.367 1.392 1.531 1.949 3.48 1.949 6.127 0 2.785-.835 5.012-2.506 6.682-1.67 1.67-3.898 2.367-6.822 2.367-2.923 0-5.151-.697-6.822-2.367s-2.505-3.76-2.505-6.543c0-2.646.556-4.596 1.81-6.127 1.252-1.531 3.063-2.227 5.29-2.506v5.43c-.835.141-1.532.418-1.949.975-.557.418-.696 1.254-.696 2.09 0 1.113.418 1.949 1.113 2.506.836.557 2.089.834 3.76.834s2.785-.277 3.62-.834 1.253-1.533 1.253-2.645c0-.836-.279-1.533-.696-2.09-.558-.557-1.254-.837-2.229-.975zm6.961-7.797H22.201v-5.709h5.987v-5.15h-5.987v-5.709h17.821v5.709h-6.961v5.15h6.961v5.709zm0-25.061v5.15H22.201v-6.96l8.911-2.506c.14 0 .418-.14.835-.14.418-.139.975-.278 1.671-.417-.557-.139-.975-.278-1.531-.417-.417 0-.696-.14-.975-.14l-8.911-2.506v-6.961h17.821v5.151H29.719c-.557-.139-1.113-.139-1.531-.139.835.278 1.81.417 2.923.696l.14.139 8.771 2.089v4.038l-8.492 2.229c-.418.139-.835.139-1.393.277-.418.139-1.113.279-1.949.418h11.834v-.001zm-8.91-23.251c1.671 0 2.924-.278 3.759-.835.696-.557 1.114-1.393 1.114-2.646s-.417-2.088-1.114-2.646c-.835-.556-2.088-.835-3.759-.835s-2.923.279-3.76.835c-.695.557-1.113 1.393-1.113 2.646s.418 2.089 1.113 2.646c.836.557 2.089.835 3.76.835zm0 5.708c-2.923 0-5.151-.835-6.822-2.506-1.671-1.531-2.505-3.759-2.505-6.683 0-2.784.834-5.012 2.505-6.683s3.899-2.506 6.822-2.506c2.924 0 5.152.835 6.822 2.506 1.671 1.671 2.506 3.898 2.506 6.683 0 2.924-.835 5.152-2.506 6.683-1.67 1.671-3.898 2.506-6.822 2.506zm8.91-21.023H22.201v-5.43l8.354-4.873c.139-.14.557-.418.975-.557.417-.139.835-.279 1.531-.557-.418.139-.696.139-1.114.139H22.201v-5.429h17.821v5.429l-8.213 5.012-1.114.557c-.417.139-.836.278-1.392.557.277-.139.556-.139.975-.139.278 0 .834-.14 1.392-.14h8.353v5.431h-.001zm-4.594-25.758v-1.53c0-1.393-.279-2.367-.975-2.924-.557-.557-1.67-.835-3.341-.835-1.532 0-2.646.278-3.341.835-.696.557-.975 1.532-.975 2.924v1.53h8.632zm4.594 5.709H22.201v-6.822c0-1.81.139-3.062.279-3.898.139-.975.417-1.67.695-2.366.836-1.114 1.811-2.089 3.063-2.646 1.393-.696 2.924-.975 4.873-.975s3.759.417 5.013 1.113c1.392.835 2.506 1.95 3.063 3.342.278.697.556 1.392.556 2.227.139.836.278 2.228.278 4.177v5.848h.001z"></path>
                  </g>
                </svg>
                <h1>Richmond</h1>
              </div>
            </td>
            <td class="py-5 px-4 border-b text-gray-400 text-xs font-thin">
              Levente Kosa
            </td>
            <td class="py-5 px-4 border-b">
              <div className="flex items-center justify-center rounded-md bg-yellow-500">
                <p className="text-[10px] text-white">in-progress</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="py-5 px-4 border-b font-thin text-xs">5</td>
            <td class="py-5 px-4 border-b text-xs">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="avatar-img h-[10px]"
                  viewBox="0.1 0.1 299.8 120.125"
                >
                  <path
                    d="M38.867 26.309C17.721 26.309.1 35.279.1 62.345c0 21.442 11.849 34.944 39.312 34.944 32.326 0 34.398-21.294 34.398-21.294H58.147s-3.358 11.466-19.69 11.466c-13.302 0-22.869-8.986-22.869-21.58h59.861v-7.904c0-12.46-7.91-31.668-36.582-31.668zM38.32 36.41c12.662 0 21.294 7.757 21.294 19.383h-43.68c0-12.343 11.268-19.383 22.386-19.383z"
                    fill="#e53238"
                  ></path>
                  <path
                    d="M75.438.1v83.597c0 4.745-.339 11.408-.339 11.408h14.939s.537-4.785.537-9.159c0 0 7.381 11.548 27.451 11.548 21.134 0 35.49-14.674 35.49-35.695 0-19.557-13.186-35.286-35.456-35.286-20.854 0-27.334 11.261-27.334 11.261V.1H75.438zm38.766 36.753c14.352 0 23.479 10.652 23.479 24.946 0 15.328-10.541 25.355-23.376 25.355-15.318 0-23.581-11.961-23.581-25.219 0-12.354 7.414-25.082 23.478-25.082z"
                    fill="#0064d2"
                  ></path>
                  <path
                    d="M190.645 26.309c-31.812 0-33.852 17.418-33.852 20.202h15.834s.83-10.169 16.926-10.169c10.459 0 18.564 4.788 18.564 13.991v3.276h-18.564c-24.645 0-37.674 7.21-37.674 21.841 0 14.398 12.038 22.232 28.307 22.232 22.172 0 29.314-12.251 29.314-12.251 0 4.873.375 9.675.375 9.675h14.076s-.545-5.952-.545-9.76V52.432c0-21.582-17.408-26.123-32.761-26.123zm17.472 37.128v4.368c0 5.697-3.516 19.861-24.212 19.861-11.333 0-16.192-5.656-16.192-12.217 0-11.935 16.363-12.012 40.404-12.012z"
                    fill="#f5af02"
                  ></path>
                  <path
                    d="M214.879 29.041h17.813l25.565 51.218 25.506-51.218H299.9l-46.459 91.184h-16.927l13.406-25.419-35.041-65.765z"
                    fill="#86b817"
                  ></path>
                </svg>
                <h1>Ebay</h1>
              </div>
            </td>
            <td class="py-5 px-4 border-b text-gray-400 text-xs font-thin">
              Andy Webb
            </td>
            <td class="py-5 px-4 border-b">
              <div className="flex items-center justify-center rounded-md bg-red-500">
                <p className="text-[10px] text-white">out-dated</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;

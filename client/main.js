Moralis.initialize("XF9cRIX09jltcRdf6TFdGkZJVLaFXvjTBVpuVEF4"); // Application id from moralis.io
Moralis.serverURL = "https://rnoulbwkugpg.moralishost.com:2053/server"; //Server url from moralis.io
const CONTRACT_ADDRESS = "0x8E6D18ddaaf9D82FCB550828CF5d8aF538a6C4E8";
const abi =[
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getTokenDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint8",
            "name": "damage",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "magic",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "lastMeal",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "andurance",
            "type": "uint256"
          }
        ],
        "internalType": "struct Token.Pet",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "damage",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "magic",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "andurance",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokentId",
        "type": "uint256"
      }
    ],
    "name": "feed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getAllTokenForUser",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];
async function login() {
  try {
    let user = Moralis.User.current();
    console.log("user1:"+ user);
    if (!user) {
      console.log("user 3:"+ user);
      $("#login_button").click(async () => {
        console.log("user 2:"+ user);
        user = await Moralis.Web3.authenticate();
        console.log("user:"+ user);
      });
    }
    RenderGame();
  } catch (error) {
    console.log(error);
  }
}

async function RenderGame() {
  $("#login_button").hide();
  $("#pet_row").html("");
  let petId = 0;
  window.web3 = await Moralis.Web3.enable();

  let contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
  console.log(contract);
 
  let token_detail = contract.methods.getTokenDetails(petId).call({ from: ethereum.selectedAddress })
     .then((data) => {
       console.log("suscess:"+ data);
       renderPet(item_pet_id,data);
     })
     .catch((err) => { console.log("err:" + err); });

  let arraypet = await contract.methods.getAllTokenForUser(ethereum.selectedAddress).call({ from: ethereum.selectedAddress })
  .then((data)=>{
    
    console.log(data);
    if(data.length == 0 ) return;
    data.forEach(item_pet_id => {
   
     let token_detail = contract.methods.getTokenDetails(item_pet_id).call({ from: ethereum.selectedAddress })
     .then((data) => {
       console.log("suscess:"+ data);
       renderPet(item_pet_id,data);
     })
     .catch((err) => { console.log("err:" + err); });
    });

  })
  .catch((err)=>{console.log(err);})
 
  
  
}

function renderPet(id, data) {
  var deathTime =new Date(parseInt(data.lastMeal)+parseInt(data.andurance)*1000);
  var now = new Date();
  if(now>deathTime){
    deathTime="<b>DEAD</b>";
  }
  var htmlString =`
  <div class="col-md-4 card" id="pet-${id}">
  <img class="card-img-top pet_img" src="" />
  <div class="card-body">
  "<div>id : <span class="pet_id">${id}</span></div>
  <div>Damage : <span class="pet_damage">${data.damage}</span></div>
  <div>Magic : <span class="pet_magic">${data.magic}</span></div>
  <div>endurance : <span class="pet_endurance"><${data.andurance}/span></div>
  <div>Time to stavation : <span class="pet_time_to_stavation">${deathTime}</span></div>
  <button id="btnfeed" data-pet-id="${id}" class="feed_button btn btn-primary btn-block" >feed</button>"
  </div> `;

  // $("#pet_id").html(id);
  // $("#pet_damage").html(data.damage);
  // $("#pet_magic").html(data.magic);
  // $("#pet_endurance").html(data.andurance);
  // $("#btnfeed").attr("data-pet-id",id);
  
  let element = $.parseHTML(htmlString);
  $("#pet_row").append(element)
  //$("#pet_time_to_stavation").html(deathTime);

  $(`#pet_${id} .feed_button` ).click(function(){
    let petId= $("#btnfeed").attr("data-pet-id");
    petfeed(petId);
    });

}

function getAbi() {

  var flickerAPI = "http://127.0.0.1:5500/build/contracts/Token.json";
  $.getJSON(flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .then(function (data) {
      console.log(data);
      return data;
    });

}

function petfeed(id){
  let contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
  console.log(contract);
  let data =  contract.methods.feed(id).send({from:ethereum.selectedAddress})
  .on("receipt",(()=>{
    console.log("done");
  }))
}

$("#btnfeed").click(function(){
let petId= $("#btnfeed").attr("data-pet-id");
petfeed(petId);
});



document.getElementById("login_button").onclick = login;
const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];
let choice;
const displayMenu = () => {
    choice = +prompt(`
        --- QUẢN LÝ ĐỘI BÓNG ---
            1. Xem danh sách
            2. Tìm kiếm (Find)
            3. Lọc vị trí (Filter)
            4. Tổng bàn thắng (Reduce)
            5. Kiểm tra hiệu suất (Some/Every)
            0. Thoát`)
};

const displayListPerson = (listPlayer) => {
    listPlayer.forEach((player) => {
        console.log(`${player[0]} (${player[2]}): ${player[1]} bàn thắng`);
    });
};

const findPlayer = (searchPlayer, listPlayer) => {
    let findUser = listPlayer.find((player) => {
        return player[0]
        .toLowerCase()
        .includes(searchPlayer.toLowerCase().trim());
    });

    if (findUser == undefined) {
        console.log("Không tìm thấy cầu thủ bạn muốn");
    } else {
        console.log(`${findUser[0]} (${findUser[2]}): ${findUser[1]} bàn thắng`);
    }
   
};

const filterPlayerByPosition = (searchPositionPlayer, listPlayer) => {
    let findListUser = listPlayer.filter((player) => {
        return player[2]
        .toLowerCase()
        .includes(searchPlayer.toLowerCase().trim());
    });

    if (findUser == undefined) {
        console.log("Không tìm thấy cầu thủ bạn muốn");
    } else {
        displayListPerson(findListUser);
    }
   
};

const handleTotalGoal = (listPlayer) => {
    listPlayer.reduce((acc, player, index, array) => {
        return (acc += player[1]);
    }, 0);
    
    return sum;
}

const performent = (listPlayer) => {
    let isDone = listPlayer.some((player) => {
        return player[1] == 0
    });

    if (isDone == true) {
        console.log("Đội có cầu thủ chưa ghi bàn");
    } else {
        console.log("Tất cả đều ghi bàn");
    }
}

do {
    displayMenu();
    switch (choice) {
        case 1:
            displayListPerson(squad);
            break;
        case 2:
            let searchName = prompt("Mời bạn nhập tên cầu thủ");
            findPlayer(searchName, squad);
            break;
        case 3:
            let searchPositionPlayer = prompt("Mời bạn nhập vị trí cầu thủ");
            filterPlayerByPosition(searchPosition, squad);
            break;
        case 4:
            handleTotalGoal(squad);
            break;
        case 5:
            performent(squad);
            break;
        default:
            break;
    }
} while (choice != 0);
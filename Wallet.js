class Wallet {
    constructor(money) {
        let _money = money
        // pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        this.checkCanPlay = value => {
            if(_money >= value) {
                return true
            } else {
                return false;
            }
        }

        this.changeWallet = (value, type = "+") => {
            if(typeof value === "number" && !isNaN(value)) {
                if(type === "+") {
                    return _money += value;
                } else if(type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Nieprawidłowy typ działania")
                }
            }
        }
    }
}

const wallet = new Wallet(200)
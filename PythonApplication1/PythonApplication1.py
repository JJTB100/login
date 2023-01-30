
def show_menu():
    print("Welcome to Pizza Express!")
    print("1. Margherita")
    print("2. Pepperoni")
    print("3. Veggie")
    print("4. BBQ Chicken")
    print("5. Quit")
    
def place_order(order):
    order_list = []
    while True:
        choice = input("Enter your choice (1-5): ")
        if choice == "1":
            order_list.append("Margherita")
        elif choice == "2":
            order_list.append("Pepperoni")
        elif choice == "3":
            order_list.append("Veggie")
        elif choice == "4":
            order_list.append("BBQ Chicken")
        elif choice == "5":
            break
        else:
            print("Invalid choice. Try again.")
    return order_list

def main:
    order = 0
    show_menu()
    order = place_order(order)
    print("You ordered: " + str(order))
    
if __name__ == "__main__":
    main()

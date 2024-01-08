def calculate_rectangle_area(length, width):
    if length < 0 or width < 0:
        raise ValueError("Length and width must be non-negative")

    return length * width

def main():
    try:
        length = float(input("Enter length of the rectangle: "))
        width = float(input("Enter width of the rectangle: "))

        area = calculate_rectangle_area(length, width)
        print(f"The area of the rectangle is: {int(area)}")  # Convert area to integer
    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()

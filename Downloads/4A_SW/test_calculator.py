# test_calculator.py

import unittest
from calculator import Calculator

class TestCalculator(unittest.TestCase):

    def setUp(self):
        # This method is run before each test, useful for setup code.
        self.calc = Calculator()

    def test_add(self):
        # Test addition functionality
        result = self.calc.add(3, 7)
        self.assertEqual(result, 10)
        
        result = self.calc.add(-1, 1)
        self.assertEqual(result, 0)
        
        result = self.calc.add(-1, -1)
        self.assertEqual(result, -2)

    def test_subtract(self):
        # Test subtraction functionality
        result = self.calc.subtract(10, 5)
        self.assertEqual(result, 5)
        
        result = self.calc.subtract(-1, -1)
        self.assertEqual(result, 0)

    def test_multiply(self):
        # Test multiplication functionality
        result = self.calc.multiply(3, 7)
        self.assertEqual(result, 21)
        
        result = self.calc.multiply(-1, 1)
        self.assertEqual(result, -1)

    def test_divide(self):
        # Test division functionality
        result = self.calc.divide(10, 2)
        self.assertEqual(result, 5)
        
        result = self.calc.divide(-6, 3)
        self.assertEqual(result, -2)

        # Test division by zero, expecting a ValueError
        with self.assertRaises(ValueError):
            self.calc.divide(10, 0)

if __name__ == '__main__':
    unittest.main()
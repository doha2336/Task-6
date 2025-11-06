import unittest
from calculator import Calculator

class TestCalculator(unittest.TestCase):
    
    def test_add(self):
        calc = Calculator()
        self.assertEqual(calc.add(2, 3), 5)
        self.assertEqual(calc.add(-1, 1), 0)
    
    def test_subtract(self):
        calc = Calculator()
        self.assertEqual(calc.subtract(5, 3), 2)
        self.assertEqual(calc.subtract(3, 5), -2)
    
    def test_multiply(self):
        calc = Calculator()
        self.assertEqual(calc.multiply(2, 3), 6)
        self.assertEqual(calc.multiply(2, 0), 0)
    
    def test_divide(self):
        calc = Calculator()
        self.assertEqual(calc.divide(6, 3), 2)
        self.assertEqual(calc.divide(5, 2), 2.5)
        
    def test_divide_by_zero(self):
        calc = Calculator()
        with self.assertRaises(ValueError):
            calc.divide(5, 0)

if __name__ == '__main__':
    unittest.main()
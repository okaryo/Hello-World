require 'minitest/autorun'

class SampleTest < Minitest::Test
  def test_sample
    assert_equal 'HELLO', 'hello'.upcase
  end

  def test_a
    a = true
    assert a
  end

  def test_b
    b = false
    assert b
  end

  def test_c
    c = false
    refute c
  end
end
